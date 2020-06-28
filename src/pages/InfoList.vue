<template>
  <div class="main">
    <div class="barent">
      <img src />
      <a>首页</a>
      <span>></span>
      <a>专题</a>
    </div>
    <div class="panls">
      <div class="duflunt style3">
        <div class="hased">
          <img src="../assets/i_gonggao.png" />
          <span>专题列表</span>
          <img src="../assets/jiantou.png" />
        </div>
        <div class="conents">
          <ul>
            <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 关于开展全国中小学图书馆图书审查清理专项行动的通知</span>
                <span class="soan_b">1973/10/03</span>
              </a>
            </li>
            <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准</span>
                <span class="soan_b">1978/11/17</span>
              </a>
            </li>
            <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部 中国福利会 中国宋庆龄基金会关于颁发第十四届宋庆龄奖学金的决定</span>
                <span class="soan_b">1990/08/18</span>
              </a>
            </li>
            <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准等</span>
                <span class="soan_b">2000/05/02</span>
              </a>
            </li>
              <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准等</span>
                <span class="soan_b">1979/12/12</span>
              </a>
            </li>
            <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部 中国福利会 中国宋庆龄基金会关于颁发第十四届宋庆龄奖学金的决定</span>
                <span class="soan_b">1990/08/18</span>
              </a>
            </li>
             <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准</span>
                <span class="soan_b">2000/05/02</span>
              </a>
            </li>
             <li>
              <a class="cka" href="/InfoDetails">
                <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准等</span>
                <span class="soan_b">1979/12/12</span>
              </a>
            </li>
          </ul>
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
            :total="100">
            </el-pagination>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.pagechanges{
    text-align: right;
    margin-top: 35px;
}
.barent {
  font-size: 20px;
  color: #6699f7;
  margin-top: 20px;
}
.barent a {
  color: #6699f7;
  cursor: none;
}
.barent span {
  margin: 0 10px;
}
.panls {
  margin-top: 40px;
  margin-bottom: 35px;
}
</style>