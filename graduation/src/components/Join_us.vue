<template>
    <div>
      <Nav></Nav>
        <div class="img">
            <img src="../assets/join_us_01.jpg" alt="">
        </div>
        <div class="title">
            <h3>加入我们</h3>
            <p>JOIN US</p>
        </div>
        <div class="breadcrumb-container">
          <Breadcrumb ref="breadcrumb"></Breadcrumb>
        </div>
        <div class="pagecontent">
            <div class="leftnav">
                <el-menu active-text-color="#dd4012" @open="change" :default-active="defaultActive" router>
                    <el-submenu index="1">
                        <template slot="title">
                            <span>员工成长</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                        <el-menu-item index="/JoinUs/treatment">员工福利</el-menu-item>
                        <el-menu-item index="/JoinUs/promote">培养与竞升</el-menu-item>
                        <!-- </el-menu-item-group> -->
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>校园招聘</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                          <el-menu-item index="/JoinUs/preach">宣讲行程</el-menu-item>
                        <el-menu-item index="/JoinUs/jobflow">招聘流程</el-menu-item>
                        <el-menu-item index="/JoinUs/job2/school">校招岗位</el-menu-item>
                        <!-- </el-menu-item-group> -->
                    </el-submenu>
                    <!-- <el-menu-item class="el-submenu" index="/AboutUs/contactus">
                        <span slot="title">联系我们</span>
                    </el-menu-item> -->
                    <el-submenu index="3">
                        <template slot="title">
                            <span>社会招聘</span>
                        </template>
                        <el-menu-item index="/JoinUs/job2/social">社招岗位</el-menu-item>
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
import Breadcrumb from './public/breadcrumb.vue'
export default {
  name: 'joinus',
  components: {
    "Nav": Nav,
    "Footer": Footer,
    "Breadcrumb": Breadcrumb
  },
  data () {
    return {
      defaultActive: '',
      route: ''
    }
  },
  mounted() {
    this.defaultActive = this.$route.path;
    // this.$refs.breadcrumb.getBreadcrumb(this.$route);
  },
  watch: {
    '$route'(val) {
      // this.$refs.breadcrumb.getBreadcrumb(val);
    }
  },
  methods: {
    change: function (e) {
      if (e) {
        console.log(e.target);
        // e.target.style.background = '#dd4012';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb-container{
  position: relative;
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
