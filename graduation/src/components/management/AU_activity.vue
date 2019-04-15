<template>
  <div style="margin-right: 20px;">
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">添加~</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="add()" plain circle></el-button>
    </div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column prop="time" label="时间" width="180" sortable align="center"></el-table-column>
        <el-table-column prop="title" label="主题" width="200" align="center"></el-table-column>
        <el-table-column  label="内容" show-overflow-tooltip>
          <!-- prop="requirements" -->
          <template slot-scope="scope">
            <div v-html="scope.row.content"></div>
            <!-- <span v-html="scope.row.content"></span> -->
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-edit" size="small" @click="getById(scope.row)" plain round>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteById(scope.row)" plain round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog对话框 -->
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="添加" center @close="close">
        <el-form :model="forms" ref="form" label-width="40px" label-position="left">
          <div>
            <el-form-item label="时间" prop="time">
              <el-date-picker type="date" v-model="forms.time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="主题" prop="title">
              <el-input v-model="forms.title" type="text" placeholder="请输入..." size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="内容" prop="content">
              <el-input v-model="forms.content" type="textarea" placeholder="请输入..." size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="图片">
              <el-upload class="uplod" accept="image/png, image/png"
                :before-upload="beforeUpload">
                <img src="" alt="" class="uplodImg">
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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
        time: '',
        title: '',
        content: ''
      },
      tableData: [],
    }
  },
  mounted() {
    this.getActivity();
  },
  methods: {
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    close () {
      this.dialog = false;
    },
    add() {
      this.type = 'add';
      this.dialog = true;
    },
    getById(data) {
      this.$ajax.get(`/api/AU_activity/findById/${data._id}`).then(res => {
        this.forms = res.data;
        // 2018-2019
        // console.log(this.forms);
      }).catch(err => {
        console.log(err);
      })
      this.type = 'update'
      this.dialog = true;
    },
    getActivity() {
      this.$ajax.get('/api/AU_activity').then(res => {
        this.tableData = res.data;
        // this.tableData = this.sortByTime(res.data, 'time');
        // console.log(this.tableData);
      }).catch(err => {
        console.log(err);
      })
    },
    deleteById(data) {
      // console.log(data);
      this.$ajax.delete(`/api/AU_activity/deleteById/${data._id}`)
      .then(() => {
        this.$message({message: '删除成功'});
        this.getActivity();
      }).catch(err => {
        console.log(err);
      })
    },
    reset(form) {
      this.$refs[form].resetFields();
      this.dialog = false;
    },
    updateById(form, type) {
      const nowYear = new Date().getFullYear();
      // console.log(nowYear);
      if(this.forms.endTime == nowYear) this.forms.endTime = '至今';
      if(type == 'update')
      {
        this.$refs[form].validate(valid => {
          if (valid) {
            this.$ajax.post(`/api/AU_activity/updateById/${this.forms._id}`, this.forms)
            .then(() => {
              this.$message({message:'编辑成功'})
              this.dialog = false;
              this.getActivity();
            })
            .catch(err => {
              console.log(err);
            })
          }
        })
      }else{
        this.$refs[form].validate(valid => {
          if(valid) {
            this.$ajax.post('/api/AU_activity/add',this.forms).then(() => {
              this.$message({message:'添加成功'})
              this.dialog = false;
              this.getActivity();
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
.uplod{
  width: 178px;
  height: 178px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.uplodImg{
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon{
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
</style>
