<template>
  <div>
    <el-row :gutter="40">
      <!-- 通信 -->
      <el-col :span="12">
        <div>
          <p style="text-align: center; font-size: 20px; font-weight: bold;">通信</p>
        </div>
        <el-card :body-style="{ width: '440px'}">
          <div slot="header">
            <span class="title">产品名称</span>
            <el-button class="btn" type="success" icon="el-icon-edit" size="small" @click="dialog = true" plain round>编辑</el-button>
          </div>
          <div class="content">
          </div>
        </el-card>
      </el-col>
      <!-- 智慧城市 -->
      <el-col :span="12">
        <div>
          <p style="text-align: center; font-size: 20px; font-weight: bold;">智慧城市</p>
        </div>
        <el-card :body-style="{ width: '440px'}">
          <div slot="header">
            <span class="title">产品名称</span>
            <el-button class="btn" type="success" icon="el-icon-edit" size="small" @click="dialog = true" plain round>编辑</el-button>
          </div>
          <div class="content">
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="更改信息" center @close="close">
        <el-form :model="content" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="名字">
              <el-input v-model="content.name" type="text" placeholder="请输入名字" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="性别">
              <!-- <el-radio-group v-model="1">
                <el-radio :label="0">女</el-radio>
                <el-radio :label="1">男</el-radio>
              </el-radio-group> -->
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="账号">
              <el-input v-model="content.name" type="text" placeholder="请输入账号" size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="密码">
              <el-input v-model="content.name" type="password" placeholder="请输入密码" size="samll" show-password clearable></el-input>
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
      content: {
        name: '',
        sex: '',
        account: '',
        password: ''
      }
    };
  },
  methods: {
    close() {
      this.dialog = false;
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  color: #606266;
  font-size: 18px;
}
.btn {
  position: relative;
  // right: -200px;
}
.name {
  margin-left: 40px;
  padding: 20px 0;
  color: #c0c4cc;
  font-size: 18px;
  float: left;
}
.img {
  margin-left: 300px;
}
.content {
  margin-left: 40px;
  font-size: 14px;
  color: #c0c4cc;
  p {
    padding: 10px 0;
  }
}
img {
  width: 56px;
  height: 56px;
}
</style>
