<template>
  <div>
    <div class="search">
      <div class="input">
        <el-input type="text" class="input" v-model="findTitle" placeholder="请输入关键字" size="samll" clearable></el-input>
      </div>
      <el-button icon="el-icon-search" @click="find"></el-button>
      <!-- <div class="add"></div> -->
      <el-button icon="el-icon-plus" type="primary" class="add" @click="add" round></el-button>
    </div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData" :default-sort="{prop:'date', order: 'descending'}">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150" align="center">
          <!-- <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 8px;">{{ scope.row.date }}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180" align="center">
          <template slot-scope="scope">
            <div style="height: 23px; overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
              {{ scope.row.title }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="副标题" width="180" align="center">
          <template slot-scope="scope">
            <div style="height: 23px; overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
              {{ scope.row.subtitle }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="内容" width="260" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <!-- <span>{{ scope.row.content }}</span> -->
            <div v-html="scope.row.content" style="height: 23px; overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-edit" @click="updateById(scope.row)" size="small" plain round>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="deleteById(scope.row)" size="small" plain round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog对话框 -->
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="添加新闻" center @close="close">
        <el-form :model="forms" ref="form" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="主标题" prop="title">
              <el-input v-model="forms.title" type="text" placeholder="请输入标题" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="副标题" prop="subtitle">
              <el-input v-model="forms.subtitle" type="text" placeholder="请输入副标题" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="日期" prop="time">
              <el-date-picker v-model="forms.time" type="date" placeholder="选择日期" :picker-options="pickerOptions"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
           </el-form-item>
          </div>
          <div>
            <el-form-item label="内容" prop="content">
              <el-input v-model="forms.content" type="textarea" placeholder="请输入在编辑器内输入内容"></el-input>
            <!-- content: {{form.content}} -->
            </el-form-item>
            <!-- <Editor ref="editor" v-model="forms.content" @input="getContent"></Editor> -->
          </div>
        </el-form>
        <div slot="footer">
            <el-button type="warning" @click="reset('form')">取 消</el-button>
            <el-button type="primary" @click="submit('form', clickType)" style="margin-left: 486px;">确 定</el-button>
          </div>
      </el-dialog>
      <!-- <Editor ref="editor" v-model="form.content" @input="getContent"></Editor> -->
    </div>
  </div>
</template>

<script>
import Editor from './tinymce.vue'
import { valid } from 'semver';
export default {
  components: {
    'Editor': Editor
  },
  data () {
    return {
      value: '',
      clickType: '',
      dialog: false,
      findTitle: '',
      forms: {
        title: '',
        subtitle: '',
        date: '',
        content: '',
      },
      tableData: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }]
      }
    }
  },
  mounted() {
    this.getNews();
  },
  methods: {
    close () {
      this.reset();
    },
    getContent (value) {
      this.forms.content = value;
    },
    add() {
      this.clickType = 'add';
      this.dialog = true;
    },
    find() {
      // this.$ajax.get('/api/news_company/findByMore', {params: {title: this.findTitle}})
      this.$ajax.get(`/api/news_company/findByMore/${this.findTitle}`)
      .then(res => {
        this.tableData = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    getNews() {
      this.$ajax.get('/api/news_company').then(res => {
        this.tableData = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    updateById(data) {
      this.dialog = true;
      this.$ajax.get(`/api/news_company/findById/${data._id}`).then(res => {
        this.forms = res.data;
        this.clickType = 'update';
      }).catch(err => {
        console.log(err);
      })
    },
    deleteById(data) {
      this.$ajax.delete(`/api/news_company/deleteById/${data._id}`).then(() => {
        this.$message({message: '删除成功'});
        this.getNews();
      }).catch(err => {
        console.log(err);
      })
    },
    reset(form) {
      this.$refs.form.resetFields();
      this.dialog = false;
    },
    submit(form, clickType) {
      if(clickType == 'add'){
        this.$refs.form.validate(valid => {
          if(valid) {
            this.$ajax.post('/api/news_company/add', this.forms)
            .then(() => {
              this.$message({message: '添加成功'});
              this.getNews();
              this.dialog = false;
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }else{
        this.$refs.form.validate(valid => {
          if(valid) {
            this.$ajax.post(`/api/news_company/updateById/${this.forms._id}`, this.forms)
            .then(() => {
              this.$message({message: '编辑成功'});
              this.getNews();
              this.dialog = false;
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
.search{
  display: flex;
  flex-direction: row;
  // width: 450px;
  padding: 20px 0;
  .input{
    width: 350px;
  }
  .el-button{
    border: none;
  }
  .add{
    margin-left: 460px;
  }
}
.content{
  .el-table__header{
    text-align: center;
  }
}
</style>
