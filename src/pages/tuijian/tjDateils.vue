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
      <p class="titel_p">图书信息</p>
      <div class="des_box">
        <div class="des_left">
          <li>
            <a>
              <span class="tou">AR超级看：</span>
              <span class="di">神奇的地球</span>
            </a>
          </li>
          <li class="text_list">
            <p>序号：20191562</p>
            <p>ISBN：9787535496584</p>
            <p>图书分类：G文化、科学、教育、体育</p>
            <p>出版单位：长江文艺出版社</p>
            <p>出版日期：2017-07</p>
            <p>第二适读对象：小学1-3年级</p>
            <p>第三适读对象：小学1-3年级</p>
            <p>定价：39.80</p>
            <p>责 任 者：汤勇</p>
            <p>收录书目：教育部基础教育课程中心推荐书目</p>
          </li>
        </div>
        <div class="des_right">
          <img src="../../assets/f_4.png" />
          <p class="chak">点击封面查看大图</p>
        </div>
      </div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
@import "./tujian.css";
.des_box {
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 10px;
  padding: 30px;
  display: flex;
}
.des_left {
  flex: 1;
}
.des_right {
  width: 320px;
  text-align: center;
  cursor: pointer;
}
.des_right img {
  width: 233px;
  height: 233px;
}
.des_left li {
  margin-top: 12px;
}

.chak {
  color: #666666;
  font-size: 13px;
  margin-top: 30px;
}
.text_list p {
  font-size: 13px;
  color: #666;
  line-height: 26px;
}
.book_panl {
  margin-bottom: 100px;
}
.inpitchan >>> .el-input-group__append {
  background-color: #1890ff !important;
  border: 1px solid #1890ff !important;
}
</style>