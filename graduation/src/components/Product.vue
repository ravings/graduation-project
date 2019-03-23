<template>
    <div>
        <div class="img">
            <img src="../assets/product_1.jpg" alt="">
        </div>
        <div class="title">
            <h3>产品中心</h3>
            <p>PRODUCTS</p>
        </div>
        <div class="pagecontent">
            <div class="leftnav">
                <el-menu @open="change" router :default-active="this.$route.path">
                    <el-submenu index="1">
                        <template slot="title">
                            <span>通信</span>
                        </template>
                        <el-menu-item v-for="(list, id) in lists" :key="id"
                        @click="getId(list._id)" :index="`/Product/communication/${list._id}`">{{ list.title}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2" popper-class="submenu">
                        <template slot="title">
                            <span>智慧城市</span>
                        </template>
                        <!-- {name: 'Pxipro', params: {id: item._id}} -->
                        <el-menu-item v-for="(item, index) in products" :key="index"
                        @click="getId(item._id)" :index="`/Product/xipro/${item._id}`">{{ item.title}}</el-menu-item>
                        <!-- :index="`/Product/xipro/${this.proId}`" -->
                        <!-- :index="`/Product/xipro/${item._id}`" -->
                        <!-- index="/Product/xipro" -->
                    </el-submenu>
                </el-menu>
            </div>
            <div class="right_content">
                <!-- <router-view :id="proId"/> -->
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      lists: [],
      products: [],
      proId: ''
    }
  },
  created () {
    this.getProducts();
    this.getCommunication();
  },
  methods: {
    getId: function (id) {
      this.proId = id;
      // console.log(this.proId);
    },
    change: function (e) {
      if (e) {
        // console.log(e.target);
        // e.target.style.background = '#dd4012';
      }
    },
    getCommunication() {
      this.$ajax.get('/api/communication')
      .then(res => {
        console.log(res.data);
        this.lists = res.data;
      })
      .catch(err => {
        console.log('fail...');
      })
    },
    getProducts() {
      this.$ajax.get('/api/product')
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
</style>
