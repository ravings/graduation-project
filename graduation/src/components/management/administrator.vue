<template>
  <div style="width: 1000px;">
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">赶快增加管理员吧~</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="dialog = true" plain circle></el-button>
    </div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="150" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="150" align="center"></el-table-column>
        <el-table-column prop="account" label="帐号" width="200" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" @click="deleteById(scope.row)" size="small" plain round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog对话框 -->
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="注册/添加" center @close="close">
        <el-form :model="content" ref="form" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="名字" prop="name">
              <el-input v-model="content.name" type="text"placeholder="请输入名字" size="samll" clearable></el-input>
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
              <el-input v-model="content.account" type="text"placeholder="请输入账号" size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="密码" prop="password">
              <el-input v-model="content.password" type="password"placeholder="请输入密码" size="samll" show-password clearable></el-input>
           </el-form-item>
          </div>
        </el-form>
        <div slot="footer">
            <el-button type="warning" @click="reset('form')">取 消</el-button>
            <el-button type="primary" @click="submit('form')" style="margin-left: 486px;">确 定</el-button>
          </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      dialog: false,
      content: {
        name: '',
        sex: '',
        account: '',
        password: ''
      },
      tableData: []
    }
  },
  mounted () {
    this.getContent();
  },
  methods: {
    close() {
      this.reset();
    },
    reset(form) {
      // this.$nextTick(() => {
      this.$refs.form.resetFields();
      // })
      this.dialog = false;
    },
    submit(form) {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$ajax.post('/api/administrator/add', this.content)
          .then(() => {
            this.$message({message:'添加成功'})
            this.dialog = false;
            this.getContent();
          })
          .catch(err => {
            this.$message({message:'用户名已被注册'})
            console.log(err);
          })
        }
      })
    },
    deleteById(data) {
      this.$ajax.delete(`/api/administrator/deleteById/${data._id}`)
      .then(() => {
        this.$message({message: '删除成功'});
      }).catch(err => {
        console.log(err);
      })
      this.getContent();
    },
    getContent() {
      let _this = this;
      this.$ajax.get('/api/administrator')
      .then(res => {
        _this.tableData = res.data;
          // console.log(res.data);
      })
      .catch(err => {
        console.log('fail...');
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
