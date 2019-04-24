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
export default {
  name: '',
  components: {
    "Nav": Nav,
    "Footer": Footer
  },
  data () {
    return {
      type: '',
      defaultActive: ''
    }
  },
  mounted() {
    this.defaultActive = this.$route.path;
  },
  methods: {
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
