<template>
  <div class="main">
    <div class="tushusoso">
      <p class="cxs">图书查询</p>
      <el-input class="inpitchan" placeholder="请输入查询图书的关键字" v-model="soosval">
        <el-button class="upcalss" slot="append">查 询</el-button>
      </el-input>
      <div class="text_open">
        <a href="/recommend">教育部基础教育课程中心推荐书目</a>
        <a href="/recommend">中国教育装备行业协会中小学核心书目</a>
        <a href="/recommend">幼儿园推荐书目</a>
      </div>
      <div class="slecst_box">
        <div class="sel_pam">
          <span>选择类目：</span>
          <div class="pp1">
            <el-select v-model="selval" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="sel_pam">
          <span>出版日期区间：</span>
          <div class="pp1">
            <el-date-picker
              v-model="dataCVlue"
              type="daterange"
              range-separator="~"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            ></el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="book_panl">
      <p class="titel_p">书目列表</p>
      <div class="list_all" @click="gotoDateils">
        <div class="p_sa">
          <li>
            <a class="span_a">
              <span class="tou">AR超级看：</span>
              <span class="di">神奇的地球</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">定价：</span>
              <span class="di">39.90</span>
            </a>
            <a class="span_a">
              <span class="tou">ISBN：</span>
              <span class="di">798968579797</span>
            </a>
            <a class="span_a">
              <span class="tou">出版日期：</span>
              <span class="di">2020.09.01</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">责任者：</span>
              <span class="di">杨勇</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">出版单位：</span>
              <span class="di">长江文艺出版社</span>
            </a>
          </li>
        </div>
        <div class="img_sa">
          <img src="../../assets/f_1.png" />
        </div>
      </div>
      <div class="list_all" @click="gotoDateils">
        <div class="p_sa">
          <li>
            <a class="span_a">
              <span class="tou">AR超级看：</span>
              <span class="di">神奇的地球</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">定价：</span>
              <span class="di">39.90</span>
            </a>
            <a class="span_a">
              <span class="tou">ISBN：</span>
              <span class="di">798968579797</span>
            </a>
            <a class="span_a">
              <span class="tou">出版日期：</span>
              <span class="di">2020.09.01</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">责任者：</span>
              <span class="di">杨勇</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">出版单位：</span>
              <span class="di">长江文艺出版社</span>
            </a>
          </li>
        </div>
        <div class="img_sa">
          <img src="../../assets/f_2.png" />
        </div>
      </div>
      <div class="list_all" @click="gotoDateils">
        <div class="p_sa">
          <li>
            <a class="span_a">
              <span class="tou">AR超级看：</span>
              <span class="di">神奇的地球</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">定价：</span>
              <span class="di">39.90</span>
            </a>
            <a class="span_a">
              <span class="tou">ISBN：</span>
              <span class="di">798968579797</span>
            </a>
            <a class="span_a">
              <span class="tou">出版日期：</span>
              <span class="di">2020.09.01</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">责任者：</span>
              <span class="di">杨勇</span>
            </a>
          </li>
          <li>
            <a class="span_a">
              <span class="tou">出版单位：</span>
              <span class="di">长江文艺出版社</span>
            </a>
          </li>
        </div>
        <div class="img_sa">
          <img src="../../assets/f_3.png" />
        </div>
      </div>
    </div>
    <div class="pagechanges">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      soosval: "",
      selval: "",
      dataCVlue: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    gotoDateils() {
      this.$router.push("/recommendDetails");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
@import "./tujian.css";
.inpitchan >>> .el-input-group__append {
  background-color: #1890ff !important;
  border: 1px solid #1890ff !important;
}
</style>