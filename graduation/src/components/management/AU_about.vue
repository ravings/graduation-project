<template>
  <div>
    <div ref="show" v-show="show">
      <div class="title">
        <h3>{{ contents[0].title }}</h3>
        <el-button class="btn" type="primary" size="small" @click="update" plain round>编辑</el-button>
      </div>
      <div class="content">
        <div v-html="this.contents[0].content"></div>
      </div>
    </div>
    <div class="form" ref="update" v-show="!show">
      <el-form :model="forms" ref="form">
        <el-form-item prop="content">
          <el-input type="textarea" v-model="forms.content" autosize></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="reset()">取消</el-button>
          <el-button type="primary" @click="submit('form')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { parse } from 'path';
export default {
  data () {
    return {
      contents: [],
      forms: {},
      show: true
    }
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.$ajax.get('/api/AU_about').then(res => {
        this.contents = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    update() {
      this.show = false;
      this.forms = this.contents[0];
    },
    submit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$ajax.post(`/api/AU_about/update/${this.contents[0]._id}`, this.forms).then(() => {
            this.$message({message: '编辑成功'});
            this.show = true;
            this.getContent();
          }).catch(err => {
            console.log(err);
          })
        }
      })
    },
    reset() {
      this.show = true;
    }
  }
}
</script>

<style lang="less" scoped>
h3{
  float: left;
  font-size: 24px;
}
.btn{
  position: relative;
  left: 50px;
}
.content{
  margin-top: 20px;
}
</style>
