<template>
  <div style="width: 1000px;">
    <el-card style="width: 400px;">
      <div slot="header">
        <span class="title">个人信息</span>
        <el-button class="btn" type="success" icon="el-icon-edit" size="small" @click="dialog = true" plain round>编辑</el-button>
      </div>
      <div>
        <div class="name">
          <span style="padding: 5px 0">{{ content.name }}</span>
          <img :src="sex_icon" alt="" style="width: 25px;height: 25px; vertical-align: bottom;">
        </div>
        <div class="img">
          <img src="../../assets/05.png" alt="">
        </div>
        <div class="content">
          <p>账号：{{ content.account }}</p>
          <p>密码：{{ content.password }}</p>
        </div>
      </div>
    </el-card>
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="更改信息" center @close="close">
        <el-form :model="content" ref="form" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="名字" prop="name">
              <el-input v-model="content.name" type="text" placeholder="请输入名字" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="content.sex">
                <el-radio label="女">女</el-radio>
                <el-radio label="男">男</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="账号" prop="account">
              <el-input v-model="content.account" type="text" placeholder="请输入账号" size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="密码" prop="password">
              <el-input v-model="content.password" type="password" placeholder="请输入密码" size="samll" show-password clearable></el-input>
           </el-form-item>
          </div>
        </el-form>
          <!-- <el-form-item> -->
          <div slot="footer">
            <el-button type="warning" @click="reset('form')">取 消</el-button>
            <el-button type="primary" @click="submit('form')" style="margin-left: 486px;">确 定</el-button>
          </div>
          <!-- </el-form-item> -->
        <!-- </el-form> -->
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
      // sex: 0,
      content: {},
      // forms: {}
        // name: '',
        // sex: '',
        // account: '',
        // password: ''

    }
  },
  mounted () {
    this.getContent();
  },
  methods: {
    close () {
      this.reset();
      // this.dialog = false;
    },
    submit (form) {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$ajax.post('/api/administrator/5ca32da90ffe1224084d16e8', this.content)
          .then(res => {
            this.$message({message:'编辑成功'})
            this.dialog = false;
          })
          .catch(err => {
            console.log(err);
          })
        }
      })
    },
    reset(form) {
      // this.$nextTick(() => {
      this.$refs.form.resetFields();
      // })
      this.dialog = false;
    },
    getContent () {
      let _this = this;
      this.$ajax.get('/api/administrator/5ca32da90ffe1224084d16e8')
      .then(res => {
        _this.content = res.data;
        this.setSex();
        // this.forms = _this.content;
          // console.log(this.content.name);
      })
      .catch(err => {
        console.log(err);
      })
    },
    setSex () {
      if (this.content.sex == '男') {
        this.sex_icon = '/img/icons/sex_1.png';
        // this.sex = 1;
      }else{
        this.sex_icon = '/img/icons/sex_0.png'
        // this.sex = 0;
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
