<template>
  <div style="width: 1000px;">
    <el-card style="width: 400px;">
      <div slot="header">
        <span class="title">个人信息</span>
        <el-button class="btn" type="success" icon="el-icon-edit" size="small" @click="dialog = true" plain round>编辑</el-button>
      </div>
      <div>
        <div class="name">
          <span style="padding: 5px 0">{{ content[0].name }}</span>
          <img :src="sex_icon" alt="" style="width: 25px;height: 25px; vertical-align: bottom;">
        </div>
        <div class="img">
          <img src="../../assets/05.png" alt="">
        </div>
        <div class="content">
          <p>账号：{{ content[0].account }}</p>
          <p>密码：{{ content[0].password }}</p>
        </div>
      </div>
    </el-card>
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="更改信息" center @close="close">
        <el-form :model="content" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="名字">
              <el-input v-model="content[0].name" type="text"placeholder="请输入名字" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="性别">
              <el-radio-group v-model="content[0].sex">
                <el-radio :label="0">女</el-radio>
                <el-radio :label="1">男</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="账号">
              <el-input v-model="content[0].account" type="text"placeholder="请输入账号" size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="密码">
              <el-input v-model="content[0].password" type="password"placeholder="请输入密码" size="samll" show-password clearable></el-input>
           </el-form-item>
          </div>
        </el-form>
        <div slot="footer">
            <el-button type="warning" @click="dialog = false">取 消</el-button>
            <el-button type="primary" @click="dialog = false" style="margin-left: 486px;">确 定</el-button>
          </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      sex_icon: '/img/icons/sex_0.png',
      sex: 0,
      content: {
        // name: '',
        // sex: '',
        // account: '',
        // password: ''
      }
    }
  },
  mounted () {
    this.getContent();
  },
  methods: {
    close () {
      this.dialog = false;
    },
    getContent () {
      let _this = this;
      this.$ajax.get('/api/administrator')
      .then(res => {
        _this.content = res.data;
        this.setSex();
          // console.log(this.content);
      })
      .catch(err => {
        console.log('fail...');
      })
    },
    setSex () {
      if (this.content.sex == '男') {
        this.sex_icon = '/img/icons/sex_0.png';
        this.sex = 1;
      }else{
        this.sex_icon = '/img/icons/sex_1.png'
        this.sex = 0;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  color: #606266;
  font-size: 18px;
}
.btn{
  position: relative;
  right: -220px;
}
.name{
  margin-left: 40px;
  padding: 20px 0;
  color: #C0C4CC;
  font-size: 18px;
  float: left;
}
.img{
  margin-left: 300px;
}
.content{
  margin-left: 40px;
  font-size: 14px;
  color: #C0C4CC;
  p{
    padding: 10px 0;
  }
}
img{
  width: 56px;
  height: 56px;
}
</style>
