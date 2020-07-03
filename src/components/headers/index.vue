<template>
  <div>
<<<<<<< HEAD
     <div class="allpage">
    <div class="main ">
      <div class="left_panl">
        <div class="tupianbox">
          <img src="../../assets/image_sj_jcys.png" alt />
          <div class="ziduan">
            <p>全国中小学图书馆</p>
            <p>图书信息平台</p>
=======
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
>>>>>>> 2c816677f9cc5b4397771c287792294088b7c4ae
          </div>
        </div>
      </div>
    </div>
    <div class="bures">
      <div class="main cents">
        <div class="nav_left">
<<<<<<< HEAD
          <li class="links" @click="changNav(index)" :class="index==indexAT?'actives':''" v-for="(item,index) in  linkData" :key="index">
            <img :src="index==indexAT?item.imgactive:item.img" />
            <router-link  :to="item.link" >{{item.name}}</router-link>
            </li>
        </div>
        <div class="nav_right">
            <a href="https://z3ur6d.axshare.com">登录</a> <span>|</span> <a href="https://z3ur6d.axshare.com">注册</a>
=======
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
>>>>>>> 2c816677f9cc5b4397771c287792294088b7c4ae
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
   data () {
      return {
        indexAT:0,
        linkData:[
          {
            img: require('../../assets/home.png'),
            imgactive: require('../../assets/home_2.png'),
            name:'首页',
            index:0,
            link:'/home'
          },
          {
            img:require('../../assets/fagui.png'),
            imgactive: require('../../assets/fagui_2.png'),
            name:'政策法规',
            index:1,
            link:'/InfoList'
          },
          {
            img: require('../../assets/gonggao.png'),
            imgactive: require('../../assets/gonggao_2.png'),
            name:'信息公告',
            index:2,
            link:'/InfoList'
          },
          {
            img: require('../../assets/tuijian.png'),
            imgactive: require('../../assets/tuijian_2.png'),
            name:'推荐书目',
            index:3,
            link:'/recommend'
          },
          {
            img: require('../../assets/zhanshi.png'),
            imgactive: require('../../assets/zhanshi_2.png'),
            name:'信息展示',
            index:4,
            link:'/Information'
          }
        ]
      };
    },
     components: {},
=======
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
>>>>>>> 2c816677f9cc5b4397771c287792294088b7c4ae

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
  height: 66px;
}
<<<<<<< HEAD
li.actives a{
  color: #C4131C;
  /* font-weight: 600; */
=======
li.actives a {
  color: #c4131c;
  font-weight: 600;
>>>>>>> 2c816677f9cc5b4397771c287792294088b7c4ae
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
<<<<<<< HEAD
input::-webkit-input-placeholder { 
/* WebKit browsers */ 
color: #6599F7; 
} 
input:-moz-placeholder { 
/* Mozilla Firefox 4 to 18 */ 
color: #6599F7; 
} 
input::-moz-placeholder { 
/* Mozilla Firefox 19+ */ 
color: #6599F7; 
} 
input:-ms-input-placeholder { 
/* Internet Explorer 10+ */ 
color: #6599F7; 
}
.bures{
  width:100%;
  height:66px;
  background:linear-gradient(180deg,rgba(111,166,255,1) 0%,rgba(75,118,227,1) 100%);
  opacity:1;
=======
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
>>>>>>> 2c816677f9cc5b4397771c287792294088b7c4ae
}
</style>