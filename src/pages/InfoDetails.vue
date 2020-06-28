<template>
  <div class="main">
    <div class="barent">
      <img src />
      <a>首页</a>
      <span>></span>
      <a>专题</a>
       <span>></span>
      <a>详情</a>
    </div>
    <div class="deatils_panl"> 
        <div class="d1">
            <p class="p1">
                我为教育“十四五”规划提建议
            </p>
            <p class="p2">
                —— 教育部印发通知部署深入开展新时代校园爱国卫生运动 
            </p>
            <p class="p3">2020-06-22</p>
            <p class="p4">
                <img src="../assets/news1.png" alt="图片"/>
            </p>
            <p class="p5">
                　　 为贯彻落实习近平总书记关于深入开展新时代爱国卫生运动的重要讲话精神，总结运用教育系统新冠肺炎疫情防控斗争经验，大力弘扬爱国主义精神，培育和践行社会主义核心价值观，改善校园环境，提高健康素养，促进学生德智体美劳全面发展，引领带动社会新风尚，近日，教育部印发通知，部署深入开展新时代校园爱国卫生运动。
            </p>
            <p class="p6">
                 　　通知要求，要弘扬爱国卫生运动精神。大力弘扬爱国是核心、卫生是根本、运动是方式的爱国卫生运动内涵，丰富新时代校园爱国卫生运动的内容和形式，推动校园爱国卫生运动从环境卫生治理向师生健康管理转变。深入开展爱国卫生运动中蕴含的爱国主义和集体主义教育，弘扬新时代伟大抗疫精神，紧密结合校园精神文明创建活动，将文明卫生教育与热爱祖国、热爱家乡、热爱校园、热爱生活相结合，引导广大师生培养爱国之情、砥砺强国之志、实践报国之行。 
            </p>
            <p class="p7">
                 通知要求，要改善校园环境卫生。整治校园整体环境，完善学校基础设施，保障校园饮用水安全，提供充足的洗手设施，加强公共区域清扫消毒和室内通风换气。强化食品安全管理，做好学校食堂从业人员健康检查、食品原料进货查验、食堂和餐饮具清洗消毒。坚持预防为主，大力宣传公共卫生安全、传染病防治和卫生健康知识，提高广大师生传染病防控意识和能力。宣传生活垃圾分类要求，强化生活垃圾分类意识，配置分类垃圾箱（桶），加强生活垃圾分类管理。推进学校厕所革命，大力推进厕所改造。落实控烟要求，加大学校控烟宣传教育力度。
            </p>
        </div>
        <div class="wenjian">
            <span class="tips">附件：</span>
            <p class="moceDw">
                <a>
                    1.中小学图书馆图书审查清理标准（试行） 
                </a>
                <a>
                     2.中小学图书馆清理图书登记表（样表） 
                </a>
                <a>
                    3.中小学图书馆图书审查清理情况汇总表
                </a>
            </p>
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
.moceDw{
    margin-left: 10px;
    display: inline-block;
    margin-top: -6px;
}
.moceDw a{
    display: block;
    color:#437DFF;
    line-height: 30px;
    font-size: 16px;
}
.p1,.p2,.p3{
    text-align: center;
}
.p1{
    color: #707070;
    font-size: 26px;
    margin-bottom: 40px;
}

.p2,.p3{
    color:#999;
    font-size: 20px;
}
.p3{
    margin-top: 10px;
    margin-bottom: 40px;
}
.p4{
    text-align: center;
    margin-bottom: 40px;
}
.p5,.p6,.p7{
    font-size: 16px;
    color: #707070;
    margin-bottom: 60px;
    line-height: 30px;
    text-indent: 2em;
}
.wenjian{
    margin-bottom: 60px;
}
.wenjian .tips{
font-size: 16px;
color: #707070;
float: left;
}
.deatils_panl{
    margin-top: 38px;
}
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
  /* cursor: none; */
}
.barent span {
  margin: 0 10px;
}
.panls {
  margin-top: 40px;
  margin-bottom: 35px;
}
</style>