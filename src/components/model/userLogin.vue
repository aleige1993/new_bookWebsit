<template>
  <div>
    <div class="layer"></div>
    <div class="model_box">
      <div class="logins">
        <div class="l_hd">
          <img src="../../assets/image_sj_jcys.png" alt />
          <div class="font_p">
            <p>全国中小学图书装备</p>
            <p>公共服务平台</p>
          </div>
        </div>
        <div class="comment">
          <p class="titles">账号登录</p>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item label prop="mobile">
              <el-input type="text" prefix-icon="el-icon-mobile-phone" v-model="ruleForm.mobile" placeholder="手机号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                placeholder="请输入您的密码"
                autocomplete="off"
                prefix-icon="el-icon-lock"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="lginb" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="whmmma">
              <a href="/">没有账号？</a>
              <a href="/">忘记密码</a>
          </div>
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
    var validatemobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      }else if(!(/^1\d{10}$/.test(value))){
         callback(new Error("请输入11位手机号"));
      }
      callback()
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback()
    };
    return {
      ruleForm: {
        pass: "",
        mobile: ""
      },
      rules: {
        mobile: [{ validator: validatemobile, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            this.$http.post('/api/Index/userLogin',{
                phone: this.ruleForm.mobile,
                UserLoginPassword:this.ruleForm.pass,
                LoginIp:'000000',
                token: localStorage.getItem('token')
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
@import "/public.css";
.whmmma{
    display: flex;
    justify-content: space-between;
}
.whmmma a{
    color: #1890FF;
}

.lginb {
  width: 100%;
  margin-top: 20px;
  background-color: #1890ff !important;
  border-color: #1890ff !important;
  letter-spacing: 20px;
}
.l_hd {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 130px;
}
.l_hd img {
  width: 57px;
  height: 60px;
}
.font_p {
  font-size: 20px;
  color: #333;
  margin-left: 10px;
  line-height: 30px;
}

.logins {
  width: 368px;
  margin: 0 auto;
}
.titles {
  text-align: center;
  color: #1890ff;
  font-size: 16px;
  margin-bottom: 20px;
}

.layer {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #000;
  left: 0;
  top: 0;
  opacity: 0.6;
}
.model_box {
  width: 950px;
  height: 700px;
  z-index: 11;
  background-color: #f0f2f5;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  -webkit-transform: translate(-50%, -50%) !important;
  -moz-transform: translate(-50%, -50%) !important;
  -ms-transform: translate(-50%, -50%) !important;
  -o-transform: translate(-50%, -50%) !important;
  transform: translate(-50%, -50%) !important;
}
</style>