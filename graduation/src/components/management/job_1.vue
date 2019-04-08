<template>
  <div style="width: 1000px;">
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">赶快发布招聘岗位吧~</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="add(type)" plain circle></el-button>
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
            <el-button type="success" icon="el-icon-edit" size="small" @click="getById(scope.row, type)" plain round>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteById(scope.row)" plain round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog对话框 -->
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="添加" center @close="close">
        <el-form :model="forms" ref="form" label-width="80px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="岗位名称" prop="title">
              <el-input v-model="forms.title" type="text" placeholder="请输入..." size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="人数" prop="number">
              <el-input v-model="forms.number" type="text" placeholder="请输入..." size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="学历" prop="education">
              <el-input v-model="forms.education" type="text" placeholder="请输入..." size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="专业要求" prop="professional">
              <el-input v-model="forms.professional" type="text" placeholder="请输入..." size="samll" clearable></el-input>
           </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="任职要求" prop="requirements">
              <el-input v-model="forms.requirements" type="textarea" placeholder="请在编辑器中输入" size="samll" clearable></el-input>
           </el-form-item>
          </div>
        </el-form>
        <div slot="footer">
            <el-button type="warning" @click="reset('form')">取 消</el-button>
            <el-button type="primary" @click="updateById('form', type)" style="margin-left: 486px;">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // value: '',
      type: '',
      dialog: false,
      forms: {
        // title: '',
        // number: '',
        // education: '',
        // professional: '',
        // requirements: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getJob();
  },
  methods: {
    close () {
      this.reset();
    },
    add(type) {
      this.type = 'add';
      this.dialog = true;
    },
    getById(data, type) {
      // console.log(type);
      this.$ajax.get(`/api/job/findById/${data._id}`).then(res => {
        this.forms = res.data;
      }).catch(err => {
        console.log(err);
      })
      this.type = 'update'
      this.dialog = true;
    },
    getJob() {
      this.$ajax.get('/api/job').then(res => {
        this.tableData = res.data;
        // console.log(this.tableData);
      }).catch(err => {
        console.log(err);
      })
    },
    deleteById(data) {
      // console.log(data);
      this.$ajax.delete(`/api/job/deleteById/${data._id}`)
      .then(() => {
        this.$message({message: '删除成功'});
        this.getJobScoial();
      }).catch(err => {
        console.log(err);
      })
    },
    reset(form) {
      this.$refs.form.resetFields();
      this.dialog = false;
    },
    updateById(form, type) {
      if(type == 'update')
      {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$ajax.post(`/api/job/updateById/${this.forms._id}`, this.forms)
            .then(() => {
              this.$message({message:'编辑成功'})
              this.dialog = false;
              this.getJobScoial();
            })
            .catch(err => {
              console.log(err);
            })
          }
        })
      }else{
        this.$refs.form.validate(valid => {
          if(valid) {
            this.$ajax.post('/api/job/add',this.forms).then(res => {
              this.$message({message:'编辑成功'})
              this.dialog = false;
              this.getJobScoial();
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
