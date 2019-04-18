<template>
    <div>
      <Nav></Nav>
        <div class="img">
            <img src="../assets/about_us_01.jpg" alt="">
        </div>
        <div class="title_breadcrumb">
          <div class="title">
            <p>关于我们</p>
            <p>ABOUT US</p>
          </div>
          <div class="breadcrumb">
              <div>
                <i class="el-icon-location-outline"></i>
                <span>当前位置：</span>
              </div>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item  to="/" class="item">首页</el-breadcrumb-item>
                <el-breadcrumb-item  class="item" v-for="(list, index) in levelList" :key="index">{{ list }}</el-breadcrumb-item>
                <!-- <el-breadcrumb-item  class="item">公司概括</el-breadcrumb-item> -->
              </el-breadcrumb>
          </div>
        </div>
        <div class="pagecontent">
            <div class="leftnav">
                <el-menu active-text-color="#dd4012" :default-active="defaultActive" router>
                    <el-submenu index="1">
                        <template slot="title">
                            <span>企业简介</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                        <el-menu-item index="/AboutUs/about">公司概括</el-menu-item>
                        <el-menu-item index="/AboutUs/history">发展历程</el-menu-item>
                        <!-- </el-menu-item-group> -->
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>企业文化</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                        <el-menu-item index="/AboutUs/culture">企业文化</el-menu-item>
                        <el-menu-item index="/AboutUs/activity">企业活动</el-menu-item>
                        <!-- </el-menu-item-group> -->
                    </el-submenu>
                    <el-menu-item class="el-submenu" index="/AboutUs/contactus">
                        <span slot="title">联系我们</span>
                    </el-menu-item>
                    <!-- <el-submenu index="3">
                        <template slot="title">
                            <span>联系我们</span>
                        </template> -->
                    </el-submenu>
                </el-menu>
            </div>
            <div class="right_content">
                <router-view/>
                <!-- <router-view></router-view> -->
            </div>
        </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
export default {
  components: {
    "Nav": Nav,
    "Footer": Footer
  },
  data () {
    return {
      levelList: [],
      defaultActive: ''
    }
  },
  mounted() {
    this.getBreadcrumb(this.$route);
    this.defaultActive = this.$route.path;
    // console.log(this.$route.path);
  },
  watch: {
    '$route'(val) {
      this.getBreadcrumb(val);
      // console.log(val.matched)
      // console.log(val.matched[0].meta.title);
      // this.levelList = val.matched.filter(item => item.meta.title);
    }
  },
  methods: {
    getBreadcrumb(val) {
      val.matched.forEach((item, index) => {
        this.levelList[index] = item.meta.title;
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
        // z-index: 0;
}
.breadcrumb{
  position: absolute;
  left: 850px;
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
.pagecontent{
    display: flex;
    flex-direction: row;
    .leftnav{
        width: 250px;
        margin-left: 60px;
        margin-top: 30px;
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
