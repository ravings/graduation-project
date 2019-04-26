<template>
  <div>
    <div style="text-align: center;padding: 8px 0;">
      <span style="font-size: 16px;color: #67C23A;padding: 0 8px;">添加产品</span>
      <el-button icon="el-icon-plus" type="success" class="add" @click="open" plain circle></el-button>
    </div>
    <div class="row">
      <el-row :gutter="40">
        <!-- 通信 -->
        <el-col :span="12">
          <div>
            <p style="text-align: center; font-size: 20px; font-weight: bold;">通信</p>
          </div>
          <el-card style="margin-top: 10px;" v-for="list in productCommu" :key="list._id">
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
          <el-card style="margin-top: 10px;" v-for="(item, index) in productCity" :key="index">
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
    </div>
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
          <div ref="upload">
            <el-form-item label="图片" prop="url">
              <el-upload class="uplod" ref="el_upload"
                :action="`/api/upload/productUpload/${radioType}`"
                accept="image/png, image/img"
                :on-success="handleSuccess"
                :before-upload="beforeUpload">
                <!-- :http-request="upload" :auto-upload="false" -->
                <img v-if="forms.url" :src="forms.url" alt="" class="uplodImg">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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
    beforeUpload(file) {
      console.log(file);
    },
    handleSuccess(res, file) {
      // this.url = window.URL.createObjectURL(file.raw);
      // console.log(this.url);
      this.$message.success('上传图片成功');
      this.forms.url = `/img/product/${res.imgName}`;
    },
    close() {
      this.reset('form');
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
          this.$refs.upload.style.display = 'none';
        }, 10);
        // console.log(this.$refs.radio);
      }else{
        setTimeout(() => {
          this.$refs.radio.style.display = 'block';
          this.$refs.upload.style.display = 'block';
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
            // this.$refs.el_upload.submit(); //  上传图片
            this.$ajax.post(`/api/${this.radioType}/add`, this.forms)
            .then(() => {
              this.$message({message:'添加成功'});
              this.reset('form');
              if (this.radioType == 'city') {
                this.getCity();
              }else {
                this.getCommu();
              }
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
              this.$message({message:'编辑成功'});
              this.reset('form');
              if (this.radioType == 'city') {
                this.getCity();
              }else {
                this.getCommu();
              }
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
.row{
  margin-left: 20px;
  margin-right: 20px;
}
img {
  width: 56px;
  height: 56px;
}
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
