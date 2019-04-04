<template>
  <div>
    <el-row :gutter="40">
      <!-- 通信 -->
      <el-col :span="12">
        <div>
          <p style="text-align: center; font-size: 20px; font-weight: bold;">通信</p>
        </div>
        <el-card :body-style="{ width: '440px'}" style="margin-top: 10px;" v-for="list in productCommu" :key="list._id">
          <div slot="header">
            <span class="title">{{ list.title }}</span>
            <div class="btn">
              <el-button type="success" icon="el-icon-edit" size="small" @click="changeCommu(list._id, 'type')" plain round>编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="small" @click="dialog = true" plain round>删除</el-button>
            </div>
          </div>
          <div class="content" v-html="list.content">
          </div>
        </el-card>
      </el-col>
      <!-- 智慧城市 -->
      <el-col :span="12">
        <div>
          <p style="text-align: center; font-size: 20px; font-weight: bold;">智慧城市</p>
        </div>
        <el-card :body-style="{ width: '440px'}" style="margin-top: 10px;" v-for="(item, index) in productCity" :key="index">
          <div slot="header">
            <span class="title">{{item.title}}</span>
            <div class="btn">
              <el-button type="success" icon="el-icon-edit" size="small" @click="dialog = true" plain round>编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="small" @click="dialog = true" plain round>删除</el-button>
            </div>
          </div>
          <div class="content" v-html="item.content">
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="dialog">
      <el-dialog :visible="dialog" width="800" :title="theTitle" center @close="close">
        <el-form :model="forms" ref="form" label-width="70px" label-position="left">
          <div style="width: 400px;">
            <el-form-item label="产品名称">
              <el-input v-model="forms.title" type="text" placeholder="请输入产品名称" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 400px;" ref="type">
            <el-form-item label="类型">
              <el-radio-group v-model="type">
                <el-radio :label="0">智慧城市</el-radio>
                <el-radio :label="1">通信</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div style="width: 400px;">
            <el-form-item label="内容">
              <el-input v-model="forms.content" type="text" placeholder="请输入账号" size="samll" clearable></el-input>
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
      theTitle: '',
      dialog: false,
      type: '',
      productCommu: '',
      productCity: '',
      forms: {}
    };
  },
  mounted() {
    this.getCommu();
    this.getCity();
  },
  methods: {
    close() {
      this.dialog = false;
    },
    changeCommu(id, type) {
      this.dialog = true;
      // let str = document.getElementById('type');
      // console.log(this.$refs.type);
      // str.style.display = 'none';
      // this.$ajax.get(`/api/communication/${id}`).then(res => {
      //   this.forms = res.data;
      // }).catch(err => {
      //   console.log(err);
      // })
    },
    getCity() {
      this.$ajax.get('/api/city').then(res => {
        this.productCity = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    getCommu() {
      this.$ajax.get('/api/communication').then(res => {
        this.productCommu = res.data;
      }).catch(err => {
        console.log(err);
      })
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
  // margin-left: 200px;
  float: right;
  // position: relative;
  // left: 200;
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
  // margin-left: 40px;
  height: 170px;
  overflow: hidden;
  font-size: 14px;
  color: #c0c4cc;
}
img {
  width: 56px;
  height: 56px;
}
</style>
