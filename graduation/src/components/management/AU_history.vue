<template>
  <div style="width: 1000px;">
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">添加~</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="add()" plain circle></el-button>
    </div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column prop="time" label="时间" width="180" align="center"></el-table-column>mn>
        <el-table-column  label="内容" show-overflow-tooltip align="center">
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
          <div style="overflow:hidden">
            <div style="float: left; margin-right: 30px;">
              <el-form-item label="时间" prop="startTime">
                <el-date-picker type="year" v-model="forms.startTime" format="yyyy年" value-format="yyyy" placeholder="起始年份"></el-date-picker>
              </el-form-item>
            </div>
            <span style="margin-left: 20px;">-</span>
            <div style="float: right; margin-right: 40px;">
              <el-form-item prop="endTime">
                <el-date-picker type="year" v-model="forms.endTime" format="yyyy年" value-format="yyyy" placeholder="结束年份"></el-date-picker>
              </el-form-item>
            </div>
          </div>
          <div>
            <el-form-item label="内容" prop="content">
              <el-input v-model="forms.content" type="textarea" placeholder="请输入..." size="samll" clearable></el-input>
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
        startTime: '',
        endTime: '',
        content: ''
      },
      tableData: [],
      // updateId: ''
    }
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    close () {
      this.dialog = false;
    },
    add() {
      this.type = 'add';
      this.dialog = true;
    },
    // 根据时间对数据进行排序
    sortByTime(arr, key) {
      return arr.slice().sort((a, b) => {
        // 2018-2019
        const x = a[key].substr(0, 4);
        const y = b[key].substr(0, 4);
        return y - x;
      })
    },
    getById(data) {
      this.$ajax.get(`/api/history/findById/${data._id}`).then(res => {
        // this.forms = res.data;
        // 2018-2019
        let startTime = res.data.time.substr(0, 4);
        let endTime = res.data.time.substring(5);
        this.forms._id = res.data._id;
        this.forms.startTime = startTime;
        this.forms.endTime = endTime;
        this.forms.content = res.data.content;
        // console.log(this.forms);
      }).catch(err => {
        console.log(err);
      })
      this.type = 'update'
      this.dialog = true;
    },
    getHistory() {
      this.$ajax.get('/api/history').then(res => {
        // this.tableData = res.data;
        this.tableData = this.sortByTime(res.data, 'time');
        // console.log(this.tableData);
      }).catch(err => {
        console.log(err);
      })
    },
    deleteById(data) {
      // console.log(data);
      this.$ajax.delete(`/api/history/deleteById/${data._id}`)
      .then(() => {
        this.$message({message: '删除成功'});
        this.getHistory();
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
            this.$ajax.post(`/api/history/updateById/${this.forms._id}`, this.forms)
            .then(() => {
              this.$message({message:'编辑成功'})
              this.dialog = false;
              this.getHistory();
            })
            .catch(err => {
              console.log(err);
            })
          }
        })
      }else{
        this.$refs[form].validate(valid => {
          if(valid) {
            this.$ajax.post('/api/history/add',this.forms).then(() => {
              this.$message({message:'添加成功'})
              this.dialog = false;
              this.getHistory();
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
