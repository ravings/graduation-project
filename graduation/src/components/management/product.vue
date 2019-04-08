<template>
  <div>
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">添加产品</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="open" plain circle></el-button>
    </div>
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
              <el-button type="success" icon="el-icon-edit" size="small" @click="getCommuById(list._id)" plain round>编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteCommuById(list._id)" plain round>删除</el-button>
            </div>
          </div>
          <div class="content" v-html="list.content" ref="content">
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
              <el-button type="success" icon="el-icon-edit" size="small" @click="getCityById(item._id)" plain round>编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteCityById(item._id)" plain round>删除</el-button>
            </div>
          </div>
          <div class="content" v-html="item.content">
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="dialog" ref="dialog">
      <el-dialog :visible="dialog" width="800" :title="theTitle" center @close="close" @open="show(clickTpye)">
        <el-form :model="forms" ref="form" label-width="70px" label-position="left">
          <div>
            <el-form-item label="产品名称" prop="title">
              <el-input v-model="forms.title" type="text" placeholder="请输入产品名称" size="samll" clearable></el-input>
            </el-form-item>
          </div>
          <div ref="radio">
            <el-form-item label="类型">
              <el-radio-group v-model="radioType">
                <el-radio label="city">智慧城市</el-radio>
                <el-radio label="communication">通信</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="内容" prop="content">
              <el-input v-model="forms.content" type="textarea" placeholder="请输入..." size="samll" clearable></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer">
            <el-button type="warning" @click="reset('form')">取 消</el-button>
            <el-button type="primary" @click="add('form', clickTpye, productType)" style="margin-left: 486px;">确 定</el-button>
          </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      theTitle: '编辑',
      dialog: false,
      radioType: 'city',
      productType: '',
      productCommu: '',
      productCity: '',
      clickTpye: 'add',
      forms: {}
    };
  },
  mounted() {
    this.getCommu();
    this.getCity();
  },
  methods: {
    close() {
      this.reset();
    },
    open() {
      this.clickTpye = 'add';
      this.theTitle = '添加';
      this.dialog = true;
    },
    show(clickTpye) {
      if(clickTpye == 'update') {
        setTimeout(() => {
          this.$refs.radio.style.display = 'none';
        }, 10);
        // console.log(this.$refs.radio);
      }else{
        setTimeout(() => {
          this.$refs.radio.style.display = 'block';
        }, 10);
      }
    },
    reset(form) {
      this.$refs.form.resetFields();
      this.dialog = false;
    },
    add(form, clickTpye, productType) {
      if(clickTpye == 'add') {
        this.$refs.form.validate(valid => {
          if(valid) {
            this.$ajax.post(`/api/${this.radioType}/add`, this.forms)
            .then(() => {
              this.$message({message:'添加成功'})
              this.dialog = false;
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }else{
        this.$refs.form.validate(valid => {
          if(valid) {
            this.$ajax.post(`/api/${productType}/updateById/${this.forms._id}`, this.forms)
            .then(() => {
              this.$message({message:'编辑成功'})
              this.dialog = false;
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }
    },
    deleteCommuById(id) {
      this.$ajax.delete(`/api/communication/deleteById/${id}`).then(() => {
        this.$message({message: '删除成功'});
        this.getCommu();
      })
    },
    deleteCityById(id) {
      this.$ajax.delete(`/api/city/deleteById/${id}`).then(() => {
        this.$message({message: '删除成功'});
        this.getCity();
      })
    },
    getCommuById(id) {
      this.dialog = true;
      this.clickTpye = 'update';
      this.productType = 'communication'
      this.$ajax.get(`/api/communication/findById/${id}`).then(res => {
        this.forms = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    getCityById(id) {
      this.dialog = true;
      this.clickTpye = 'update';
      this.productType = 'city'
      this.$ajax.get(`/api/city/findById/${id}`).then(res => {
        this.forms = res.data;
      }).catch(err => {
        console.log(err);
      })
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
  // display: block;
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
