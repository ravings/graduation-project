<template>
  <div>
    <div class="search">
      <div class="input">
        <el-input type="text" class="input" placeholder="请输入关键字" size="samll" clearable></el-input>
      </div>
      <el-button icon="el-icon-search"></el-button>
      <!-- <div class="add"></div> -->
      <el-button icon="el-icon-plus" type="primary" class="add" @click="dialog = true" round></el-button>
    </div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData" :default-sort="{prop:'date', order: 'descending'}">
        <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
        <el-table-column prop="date" label="时间" sortable width="180" align="center">
          <!-- <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 8px;">{{ scope.row.date }}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180" align="center"></el-table-column>
        <el-table-column prop="content" label="内容" width="360" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.content }}</span>
          </template>
        </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-edit" size="small" plain round>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" plain round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog对话框 -->
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" title="添加新闻" center @close="close">
        <el-form :model="form" label-width="60px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="主标题">
              <el-input v-model="form.title" type="text" placeholder="请输入标题" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="副标题">
              <el-input v-model="form.subtitle" type="text" placeholder="请输入副标题" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="日期">
              <el-date-picker v-model="form.date" type="date" placeholder="选择日期" :picker-options="pickerOptions"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd">></el-date-picker>
           </el-form-item>
          </div>
          <div>
            <el-form-item label="内容">
              <el-input v-model="form.content" type="textarea" disabled placeholder="请输入在编辑器内输入内容"></el-input>
            <!-- content: {{form.content}} -->
            </el-form-item>
            <Editor ref="editor" v-model="form.content" @input="getContent"></Editor>
          </div>
        </el-form>
        <div slot="footer">
            <el-button type="warning" @click="dialog = false">取 消</el-button>
            <el-button type="primary" @click="dialog = false" style="margin-left: 486px;">确 定</el-button>
          </div>
      </el-dialog>
      <!-- <Editor ref="editor" v-model="form.content" @input="getContent"></Editor> -->
    </div>
  </div>
</template>

<script>
import Editor from './tinymce.vue'
export default {
  components: {
    'Editor': Editor
  },
  data () {
    return {
      value: '',
      dialog: false,
      form: {
        title: '',
        subtitle: '',
        date: '',
        content: '',
      },
      tableData: [
        {
          date: '2019-03-28',
          title: 'xxxxx',
          content: 'xxxxxxxxx'
        },
        {
          date: '2019-03-25',
          title: 'xxxxx',
          content: 'xxxxxxxxx'
        },
        {
          date: '2019-03-31',
          title: 'xxxxx',
          content: 'xxxxxxxxx'
        },
        {
          date: '2019-03-20',
          title: 'xxxxx',
          content: 'xxxxxxxxx'
        }
      ],
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
  methods: {
    close () {
      this.dialog = false;
    },
    getContent (content) {
      this.form.content = content;
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
