<template>
  <div class="bock">
    <div class="box">
    <div class="login">
      <form action="#" method="post">
        <div class="title">
          <h4>管理员登录</h4>
        </div>
        <div class="text">
          <el-input type="text" v-model="account" size="mini"
          prefix-icon="el-icon-edit" placeholder="请输入账号" clearable></el-input>
        </div>
        <div class="password">
          <el-input type="password" v-model="password" size="small"
          prefix-icon="el-icon-edit" placeholder="请输入密码" show-password></el-input>
        </div>
        <div class="button">
          <el-button type="submit" round>Login</el-button>
          <router-link to="/"><el-button class="bun-back" icon="el-icon-back" round></el-button></router-link>
        </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>
.bock{
  min-height: 600px;
  // text-align: center;
  a{
    // list-style: none;
    text-decoration: none;
  }
}
.box{
  // height: 300px;
  width: 500px;
  border: 1px solid #000;
  padding: 40px;
  margin-top: 100px;
  margin-left: 400px;
}
.login{
  width: 300px;
  height: 200px;
  padding: 40px;
  margin: 0 auto;
  background-color: rgba(144, 147, 153, .25);
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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

