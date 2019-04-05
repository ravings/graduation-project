<template>
  <div style="width: 1000px;">
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">赶快发布招聘岗位吧~</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="dialog = true" plain circle></el-button>
    </div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column prop="title" label="职位" width="150" align="center"></el-table-column>
        <el-table-column prop="number" label="人数" width="80" align="center"></el-table-column>
        <el-table-column prop="education" label="学历" width="150" align="center"></el-table-column>
        <el-table-column prop="professional" label="专业要求" width="150" align="center"></el-table-column>
        <el-table-column  label="任职要求" width="200" align="center">
          <!-- prop="requirements" -->
          <template slot-scope="scope">
            <div v-html="scope.row.requirements" style="height: 23px; overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div>
          </template>
        </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-edit" size="small" @click="updateById(scope.row)" plain round>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteById(scope.row)" plain round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog对话框 -->
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="添加" center @close="close">
        <el-form :model="content" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="名字">
              <el-input v-model="content.title" type="text"placeholder="请输入名字" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="性别">

            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="账号">
              <el-input v-model="content.number" type="text"placeholder="请输入账号" size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="密码">
              <el-input v-model="content.education" type="password"placeholder="请输入密码" size="samll" show-password clearable></el-input>
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
      value: '',
      dialog: false,
      content: {
        title: '',
        number: '',
        education: '',
        professional: '',
        requirements: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getJobScoial();
  },
  methods: {
    close () {
      this.dialog = false;
    },
    getJobScoial() {
      this.$ajax.get('/api/jobScoial').then(res => {
        this.tableData = res.data;
        // console.log(this.tableData);
      }).catch(err => {
        console.log(err);
      })
    },
  }
}
</script>

<style lang="less" scoped>
</style>
