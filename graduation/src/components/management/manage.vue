<template>
  <div class="block">
    <div class="title">
      <i class="el-icon-menu" @click="show_hide"></i>
      <span>公司首页管理系统</span>
    </div>
    <div class="content">
      <div class="left">
        <el-menu class="el-menu-menu" background-color="#f5f5f5" :collapse="isCollapse">
          <div class="img" id="img" >
            <img src="../../assets/05.png" alt="">
            <!-- v-show="!isCollapse" -->
          </div>
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>个人设置</span>
            </template>
            <el-menu-item index="1-1">修改个人信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>关于我们</span>
            </template>
            <el-menu-item-group>
              <span slot="title">企业简介</span>
              <el-menu-item index="2-1">公司概括</el-menu-item>
              <el-menu-item index="2-2">发展历程</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">企业文化</span>
              <el-menu-item index="2-3">企业文化</el-menu-item>
              <el-menu-item index="2-4">企业活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>新闻资讯</span>
            </template>
            <el-menu-item index="3-1">公司新闻</el-menu-item>
            <el-menu-item index="3-2">行业动态</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>产品中心</span>
            </template>
            <el-menu-item index="3-1">通信</el-menu-item>
            <el-menu-item index="3-2">智慧城市</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>加入我们</span>
            </template>
            <el-menu-item-group>
              <span slot="title">招聘岗位</span>
              <el-menu-item index="2-1">校招岗位</el-menu-item>
              <el-menu-item index="2-2">社招岗位</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    show_hide () {
        let str = document.getElementById('img');
        // str.style.overflow = 'hidden';
        // console.log(str);
      if (this.isCollapse) {
        this.isCollapse = false;
        // str.style.display = 'none';
        // str.style.display = 'block';
      }else{
        this.isCollapse = true;
        // str.style.display = 'none';
        // console.log(str.style.display);
      }
      // console.log(this.isCollapse);
    }
  }
}
</script>

<style lang="less" scoped>
.block{
  background-color: #f5f5f5;
}
.title{
  height: 60px;
  // border: 1px solid #000;
  line-height: 60px;
  box-shadow: 0 -2px 20px #000;
  i{
    font-size: 26px;
    cursor: pointer;
    margin: 0 25px;;
  }
  span{
    // overflow: hidden;
    font-size: 20px;
    // vertical-align: bottom
  }
}
.content{
  .left{
    // width: 260px;
    border-right: 1px solid #d7d7d7;
    .img{
      text-align: center;
      padding: 10px 0;
      img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
      }
    }
    .el-menu-menu{
      margin-top: 15px;
    }
    .el-menu-menu:not(.el-menu--collapse){
      width: 260px;
    }
  }
}
</style>
