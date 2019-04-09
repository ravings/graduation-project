<template>
  <div class="bock">
    <div class="box">
    <div class="login">
      <el-form ref="form" :model="forms">
        <div class="title">
          <h4>管理员登录</h4>
        </div>
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
        <el-button type="primary" plain round>Login</el-button>
        <router-link to="/"><el-button class="bun-back" type="success" icon="el-icon-back" plain round></el-button></router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forms: {
        account: '',
        password: ''
      }
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
.text, .password, .button{
  padding: 15px 0;
}
</style>

