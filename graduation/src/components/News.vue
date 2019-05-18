<template>
    <div>
      <Nav></Nav>
        <div class="img">
            <img src="../assets/new_01.jpg" alt="">
        </div>
        <div class="title">
            <h3>新闻资讯</h3>
            <p>NEWS</p>
        </div>
        <div class="breadcrumb-container">
          <div class="breadcrumb">
            <div>
              <i class="el-icon-location-outline"></i>
                <span>当前位置：</span>
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item  to="/" class="item">首页</el-breadcrumb-item>
              <el-breadcrumb-item  to="" class="item">新闻资讯</el-breadcrumb-item>
              <el-breadcrumb-item  to="" class="item">{{ title }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="pagecontent">
            <div class="leftnav">
                <el-menu :default-active="defaultActive" router>
                  <el-menu-item class="el-submenu" :index="`/News/news/news_company`">
                    <span slot="title">公司新闻</span>
                      </el-menu-item>
                  <el-menu-item class="el-submenu" :index="`/News/news/news_industry`">
                    <span slot="title">行业动态</span>
                  </el-menu-item>
                </el-menu>
            </div>
            <div class="right_content">
                <router-view/>
            </div>
        </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
import { type } from 'os';
export default {
  name: '',
  components: {
    "Nav": Nav,
    "Footer": Footer
  },
  data () {
    return {
      type: '',
      defaultActive: '',
      title: ''
    }
  },
  mounted() {
    // this.defaultActive = this.$route.path;
    this.getTitle();
  },
  methods: {
    getTitle() {
      this.type = this.$route.params.type;
      if (this.type == 'news_company') {
        this.title = '公司新闻';
        this.defaultActive = '/News/news/news_company';
      }else {
        this.title = '行业动态';
        this.defaultActive = '/News/news/news_industry';
      }
    }
  },
  watch: {
    '$route'(val) {
      this.getTitle();
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb-container{
  position: relative;
}
.breadcrumb{
  position: absolute;
  // left: 1000px;
  right: 100px;
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
