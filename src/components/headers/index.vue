<template>
  <div>
    <div class="allpage">
      <div class="main">
        <div class="left_panl">
          <div class="tupianbox">
            <img src="../../assets/image_sj_jcys.png" alt />
            <div class="ziduan">
              <p>全国中小学图书装备</p>
              <p>公共服务平台</p>
            </div>
          </div>
          <div class="inputbox">
            <input type="text" placeholder="输入搜索内容" />
            <img class="soso" src="../../assets/soso.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="bures">
      <div class="main cents">
        <div class="nav_left">
          <li
            class="links"
            @click="changNav(index)"
            :class="index==indexAT?'actives':''"
            v-for="(item,index) in  linkData"
            :key="index"
          >
            <router-link :to="item.link">
              <img :src="index==indexAT?item.imgactive:item.img" />
              {{item.name}}
            </router-link>
          </li>
        </div>
        <div class="nav_right">
          <a>登录</a>
          <span>|</span>
          <a>注册</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexAT: 0,
      linkData: [
        {
          img: require("../../assets/home.png"),
          imgactive: require("../../assets/home_2.png"),
          name: "首页",
          index: 0,
          link: "/home"
        },
        {
          img: require("../../assets/fagui.png"),
          imgactive: require("../../assets/fagui_2.png"),
          name: "政策法规",
          index: 1,
          link: "/InfoList"
        },
        {
          img: require("../../assets/gonggao.png"),
          imgactive: require("../../assets/gonggao_2.png"),
          name: "信息公告",
          index: 2,
          link: "/InfoList"
        },
        {
          img: require("../../assets/tuijian.png"),
          imgactive: require("../../assets/tuijian_2.png"),
          name: "推荐书目",
          index: 3,
          link: "/recommend"
        },
        {
          img: require("../../assets/zhanshi.png"),
          imgactive: require("../../assets/zhanshi_2.png"),
          name: "信息展示",
          index: 4,
          link: "/InfoList"
        }
      ]
    };
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    changNav(i) {
      this.$data.indexAT = i;
    }
  },

  watch: {}
};
</script>

<style  scoped>
.nav_right a {
  color: #fff;
  cursor: pointer;
}
.nav_right span {
  margin: 0 10px;
  font-size: 18px;
  color: #fff;
}
.nav_right {
  font-size: 20px;
  color: #fff;
}
.cents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 88px;
}
li.actives a {
  color: #c4131c;
  font-weight: 600;
}
.links {
  display: inline-block;
  margin-right: 50px;
}
.links:nth-child(3) img {
  margin-top: 3px;
}
.links img {
  float: left;
  vertical-align: middle;
  margin-right: 4px;
}

.links a {
  font-size: 20px;
  color: #fff;
}
.allpage {
  background: url(../../assets/bg3.png) no-repeat;
  background-size: 100% 100%;
  height: 300px;
  width: 100%;
}
.left_panl {
}
.tupianbox {
  display: flex;
  padding-top: 60px;
}
.ziduan {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-left: 10px;
  letter-spacing: 3px;
}
.inputbox {
  width: 353px;
  height: 50px;
  border: 2px solid #6599f7;
  border-radius: 25px;
  background: rgba(221, 221, 221, 0.4);
  overflow: hidden;
  padding: 5px;
  margin-top: 80px;
}
.inputbox input {
  width: 85%;
  height: 100%;
  background: rgba(221, 221, 221, 0.1);
  border: none;
  outline: none;
  float: left;
  text-indent: 20px;
  color: #6599f7;
  font-size: 16px;
}
.inputbox .soso {
  float: right;
  margin-top: 10px;
  margin-right: 15px;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #6599f7;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #6599f7;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #6599f7;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #6599f7;
}
.bures {
  width: 100%;
  height: 88px;
  background: linear-gradient(
    180deg,
    rgba(111, 166, 255, 1) 0%,
    rgba(75, 118, 227, 1) 100%
  );
  opacity: 1;
}
</style>