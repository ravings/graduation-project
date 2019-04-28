<template>
    <div>
      <NaV></NaV>
        <div class="img">
            <img src="../assets/product_1.jpg" alt="">
        </div>
        <div class="title">
            <h3>产品中心</h3>
            <p>PRODUCTS</p>
        </div>
        <!-- <Breadcrumb></Breadcrumb> -->
        <div class="breadcrumb">
          <div>
            <i class="el-icon-location-outline"></i>
              <span>当前位置：</span>
          </div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item  to="/" class="item">首页</el-breadcrumb-item>
            <el-breadcrumb-item  to="" class="item">产品中心</el-breadcrumb-item>
            <el-breadcrumb-item  to="" class="item" v-for="(list, index) in levelList" :key="index">{{ list }}</el-breadcrumb-item>
            <!-- <el-breadcrumb-item  to="" class="item">{{ title }}</el-breadcrumb-item>
            <el-breadcrumb-item  to="" class="item">{{ contentTitle }}</el-breadcrumb-item> -->
          </el-breadcrumb>
        </div>
        <div class="pagecontent">
            <div class="leftnav">
                <el-menu router :default-active="this.$route.path" @select="receive">
                    <el-submenu index="1">
                        <template slot="title">
                            <span>通信</span>
                        </template>
                        <el-menu-item v-for="(list, id) in lists" :key="id"
                        :index="`/Product/xipro/communication/${list._id}`">{{ list.title}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2" popper-class="submenu">
                        <template slot="title">
                            <span>智慧城市</span>
                        </template>
                        <!-- {name: 'Pxipro', params: {id: item._id}} -->
                        <el-menu-item v-for="(item, index) in products" :key="index"
                        :index="`/Product/xipro/city/${item._id}`">{{ item.title}}</el-menu-item>
                        <!-- :index="`/Product/xipro/${this.proId}`" -->
                        <!-- :index="`/Product/xipro/${item._id}`" -->
                        <!-- index="/Product/xipro" -->
                    </el-submenu>
                </el-menu>
            </div>
            <div class="right_content">
                <!-- <router-view :id="proId"/> -->
                <router-view ref="product" @getTitle="getTitle"/>
            </div>
        </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
import Breadcrumb from './public/breadcrumb.vue'
export default {
  name: 'product',
  components: {
    "Nav": Nav,
    "Footer": Footer,
    "Breadcrumb": Breadcrumb
  },
  data () {
    return {
      lists: [],
      products: [],
      levelList: []
    }
  },
  mounted() {
    this.getProducts();
    this.getCommunication();
  },
  watch: {

  },
  methods: {
    receive(index, indexPath) {
      // this.$refs.product.sendTitle();
      // this.getBreadcrumb();
      // console.log('1');
    },
    getTitle(val) {
      // this.contentTitle = val;
      this.levelList = val;
      // console.log('val:'+ val)
    },
    getCommunication() {
      this.$ajax.get('/api/communication')
      .then(res => {
        // console.log(res.data);
        this.lists = res.data;
      })
      .catch(err => {
        console.log('fail...');
      })
    },
    getProducts() {
      this.$ajax.get('/api/city')
      .then(res => {
        // console.log(res.data);
        this.products = res.data;
      })
      .catch(err => {
        console.log('fail...');
      })
    }
  }
}
</script>

<style lang="less" scoped>
.img{
    font-size: 0px;
    img{
        width: 100%;
        // height: 100%;
    }
}
.title{
        // height: 60px;
        width: 250px;
        color: #fff;
        background-color: rgba(221, 64, 18, 1);
        font-size: 28px;
        text-align: center;
        padding: 10px 0;
        margin-top: -50px;
        margin-left: 60px;
        z-index: 100;
}
.pagecontent{
    display: flex;
    flex-direction: row;
    .leftnav{
        width: 250px;
        margin-left: 60px;
        margin-top: 30px;
        .submenu:hover{
          background-color: rgba(221, 64, 18, 1);
        }
        .el-menu{
            background-color: #e5e5e5;
            span{
                font-size: 19px;
            }
        }
    }
    .right_content{
        width: 900px;
        margin-top: 30px;
        margin-left: 40px;
        padding: 20px;
        min-height: 700px;
        // border: 1px solid #000;
        // height: 200px;
    }
}
.breadcrumb{
  position: absolute;
  left: 900px;
  // right: 100px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #999;
}
.item{
  // vertical-align: bottom;
  margin-top: 3px;
  color: #999;
}
</style>
