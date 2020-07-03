<template>
  <div>
    <div class="main">
      <div class="panl1">
        <div class="loop_box">
          <el-carousel height="340px" :autoplay="true" :interval="5000" trigger="click">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="banber">
                <img class="addomg" src="../assets/banner1 (1).png" alt />
                <p class="titels">
                  <a href="/InfoDetails">全国家庭教育主题宣传活动启动仪式在北京举行</a>
                </p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="img_box">
          <a href="/InfoDetails">
            <img src="../assets/banner1 (2).png" alt />
          </a>
          <a href="/InfoDetails">
            <img src="../assets/banner1 (3).png" alt />
          </a>
        </div>
      </div>
      <div class="panl2">
        <div class="duflunt style1">
          <div class="hased">
            <a href="/InfoList">
            <img src="../assets/i_fagui.png" />
            <span>政策法规</span>
            <img src="../assets/jiantou.png" />
            </a>
          </div>
          <div class="conents">
            <ul>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 国务院办公厅印发《关于新时代推进普通高···</span>
                  <span class="soan_b">1973/10/03</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》···</span>
                  <span class="soan_b">1978/11/17</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部 中国福利会 中国宋庆龄基金会关于颁发···</span>
                  <span class="soan_b">1990/08/18</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等···</span>
                  <span class="soan_b">2000/05/02</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等···</span>
                  <span class="soan_b">1979/12/12</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="duflunt style2">
          <div class="hased">
            <a href="/InfoList">
            <img src="../assets/i_gonggao.png" />
            <span>信息公告</span>
            <img src="../assets/jiantou.png" />
            </a>
          </div>
          <div class="conents">
            <ul>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 国务院办公厅印发《关于新时代推进普通高中育人方式改革的指导意见》</span>
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
      </div>
      <div class="panl3">
        <div class="duflunt style3">
          <div class="hased">
            <a href="/InfoList">
              <img src="../assets/i_tuijian.png" />
              <span>推荐书目</span>
              <img src="../assets/jiantou.png" />
            </a>
          </div>
          <div class="conents">
            <ul>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准</span>
                  <span class="soan_b">2012/06/22</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准</span>
                  <span class="soan_b">2000/04/07</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 国务院办公厅印发《关于新时代推进普通高中育人方式改革的指导意见》</span>
                  <span class="soan_b">1973/10/03</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部发布《初中物理教学装备配置标准》等6个学科教学装备配置标准《初中物理教学装备配置标准》等</span>
                  <span class="soan_b">1978/11/17</span>
                </a>
              </li>
              <li>
                <a class="cka" href="/InfoDetails">
                  <span class="soan_a">· 教育部 中国福利会 中国宋庆龄基金会关于颁发第十四届宋庆龄奖学金的决定</span>
                  <span class="soan_b">1990/08/18</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="duflunt style4">
          <div class="hased">
            <a href="/InfoList">
            <img src="../assets/i_xiazai.png" />
            <span>资料下载</span>
            <img src="../assets/jiantou.png" />
            </a>
          </div>
          <div class="commit-dw">
            <li>
              <a>1.教学装备信息标准</a>
            </li>
            <li>
              <a>2.第十四届奖学金公告···</a>
            </li>
            <li>
              <a>3.新学期教学规划标准</a>
            </li>
            <li>
              <a>4.义务教育阶段教师素养</a>
            </li>
            <li>
              <a>5.南京市中小学图书馆</a>
            </li>
            <li>
              <a>6.哈尔滨市图书馆</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style  scoped>
.commit-dw li {
  color: #666;
  margin-top: 16px;
}
.commit-dw li a {
  color: #666;
}
.commit-dw li a:hover {
  color: #6599f7;
}
.style4 {
  width: 203px;
  height: 250px;
  margin-left: 40px;
  float: right;
}
.style4 .hased {
  border-bottom: none;
}
.style4 .hased img {
  margin-bottom: 5px;
  margin-top: 0;
}
.style4 .hased span {
  font-size: 20px;
}
.panl3 {
  margin-top: 20px;
  margin-bottom: 35px;
}
.style3 {
  width: 957px;
  height: 250px;
}
.panl2 {
  margin-top: 20px;
}
.style2 {
  width: 660px;
  height: 250px;
  margin-left: 20px;
}
.style1 {
  width: 520px;
  height: 250px;
}
.loop_box >>> .el-carousel__indicators {
  left: initial !important;
  right: 20px !important;
  transform: none !important;
}
.loop_box >>> .el-carousel__indicators button {
  width: 6px;
  height: 6px !important;
  border-radius: 100% !important;
  background-color: #fff !important;
}

.loop_box >>> .is-active button {
  width: 20px !important;
  border-radius: 3px !important;
}
.titels a {
  color: #fff;
}
.banber .titels {
  font-size: 24px;
  color: #fff;
  left: 20px;
  width: 100%;
  bottom: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  position: absolute;
  z-index: 2;
}
.banber {
  height: 340px;
  width: 100%;
  background-color: #ccc;
}
.banber img {
  width: 100%;
  height: 100%;
}
.loop_box {
  width: 800px;
  height: 340px;
  float: left;
  position: relative;
}
.img_box {
  float: right;
  width: 380px;
  overflow: hidden;
  margin-left: 20px;
}
.img_box a {
  display: inline-block;
}
.img_box a img {
  width: 100%;
  height: 160px;
}
.img_box a:last-child img {
  margin-top: 17px;
}
.panl1 {
  /* background-color: #ccc; */
  margin-top: 20px;
  display: inline-block;
}
</style>