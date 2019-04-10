<template>
  <div class="bock">
    <div class="box">
    <div class="login">
      <div class="title">
          <h4>管理员登录</h4>
      </div>
      <el-form ref="form" :model="forms" :rules="rules" hide-required-asterisk status-icon>
        <div class="text">
          <el-form-item prop="account">
            <el-input type="text" v-model="forms.account" size="mini"
            prefix-icon="el-icon-edit" placeholder="请输入账号" clearable></el-input>
          </el-form-item>
        </div>
        <div class="password">
          <el-form-item prop="password">
            <el-input type="password" v-model="forms.password" size="small"
            prefix-icon="el-icon-edit" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="login('form')" plain round>Login</el-button>
        <router-link to="/"><el-button class="bun-back" type="success" icon="el-icon-back" plain round></el-button></router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
  data () {
    return {
      forms: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          {required: true, message:"用户名不能为空!", trigger: 'blur'},
          {min: 5, max: 12, message:"长度在5-12字符串之间", trigger:"blur"}
        ],
        password: [
          {required: true, message:"密码不能为空!", trigger: 'blur'},
          {min: 5, max: 12, message:"长度在5-12字符串之间", trigger:"blur"}
        ]
      }
    }
  },
  methods: {
    login(form) {
      this.$refs.form.validate(valid => {
        if(valid) {
          this.$ajax.post('/api/administrator/login', this.forms)
          .then((res) => {
            const token = res.data.token;
            // 存储token
            localStorage.setItem('token', token);
            // console.log(localStorage.token);
            const decode = jwt_decode(token);
            // console.log(decode);
            this.$message({message: '欢迎！'});
            // this.$router.push({path: '/Management/home'});
          }).catch(err => {
            this.$message({message: '帐号或密码错误！'});
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bock{
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  // background-color: #3e91c9;
  background-color: rgba(62, 145, 201, .75);
  a{
    text-decoration: none;
  }
}
.box{
  width: 500px;
  // border: 1px solid #000;
  padding: 40px;
  margin-top: 100px;
  margin-left: 400px;
}
.login{
  width: 300px;
  height: 200px;
  padding: 40px;
  margin: 0 auto;
  // background-color: rgba(144, 147, 153, .5);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .2), 0 0 8px rgba(0, 0, 0, .24)
}
.title{
  text-align: center;
  font-size: 15px;
  color: #666;
}
.button{
  position: relative;
  .el-button{
    width: 82.27px;
  }
  .bun-back{
    // margin-left: 100px;
    position: absolute;
    right: 5px;
  }
}
.button{
  padding: 10px 0;
}
</style>

