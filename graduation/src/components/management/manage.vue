<template>
  <div class="block">
    <div class="title">
      <i class="el-icon-menu" @click="show_hide"></i>
      <span>公司首页管理系统</span>
      <el-button class="exit" @click="exit" icon="el-icon-star-off" type="warning" size="mini" plain round>退出登录</el-button>
    </div>
    <div class="content">
      <div class="left">
        <el-menu class="el-menu-menu" background-color="#f5f5f5" :collapse="isCollapse" :default-active="tabsValue" router>
          <div class="img" id="img" >
            <img src="../../assets/05.png" alt="">
            <!-- v-show="!isCollapse" -->
          </div>
          <el-menu-item index="/Management/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item index="/Management/Personal_information">个人信息</el-menu-item>
            <el-menu-item index="/Management/administrator">管理员</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>关于我们</span>
            </template>
            <el-menu-item-group>
              <span slot="title">企业简介</span>
              <el-menu-item index="/Management/AU_about">公司概括</el-menu-item>
              <el-menu-item index="/Management/AU_history">发展历程</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">企业文化</span>
              <el-menu-item index="#">企业文化</el-menu-item>
              <el-menu-item index="/Management/AU_activity">企业活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>新闻资讯</span>
            </template>
            <el-menu-item index="/Management/news_company">公司新闻</el-menu-item>
            <el-menu-item index="/Management/news_industry">行业动态</el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="4"> -->
          <el-menu-item index="/Management/product">
            <!-- <template slot="title"> -->
              <i class="el-icon-goods"></i>
              <span slot="title">产品中心</span>
            <!-- </template> -->
          </el-menu-item>
          <!-- </el-submenu> -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>加入我们</span>
            </template>
            <el-menu-item-group>
              <span slot="title">招聘岗位</span>
              <el-menu-item index="/Management/job_1">校招岗位</el-menu-item>
              <el-menu-item index="/Management/job_2">社招岗位</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑器</span>
            </template>
            <el-menu-item index="/Management/tinymce">Tinymce富文本编辑器</el-menu-item>
            <el-menu-item index="#">Markdown编辑器</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
        <div class="table">
          <el-tabs type="card" closable v-model="tabsValue" @tab-click="switchTab" @tab-remove="removeTab">
            <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">

            </el-tab-pane>
          </el-tabs>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,  //  是否能够展开，收缩菜单
      tabs: [],
      tabsValue: '/Management/home'
    }
  },
  watch: {
    '$route' (val) {
      // console.log(val);
      let flag = false;
      // 设置当前激活菜单
      for (let tab of this.tabs) {
        if (tab.title == val.name) {
          flag = true;
          this.activeTab(val.path);
          break;
        }
      }
      // 增加tab页并设置为当前激活菜单
      if (!flag) {
        this.addTab({
          path: val.path,
          name: val.name
        });
        this.activeTab(val.path);
      }
    }
  },
  // 刷新是显示首页页面
  mounted () {
    this.addTab({path: '/Management/home', name: '首页'});
    this.$router.push({path: this.tabsValue});
  },
  methods: {
    show_hide () {
      if (this.isCollapse) {
        this.isCollapse = false;
      }else{
        this.isCollapse = true;
      }
    },
    exit() {
      // localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      this.$router.push('/')
    },
    addTab (data) {
        this.tabs.push({
        title: data.name,
        name: data.path
      })
    },
    // 切换至当前tab页
    switchTab () {
      this.$router.push({ path: this.tabsValue});
    },
    removeTab (targetName) {
      if (targetName == '/Management/home') {
        // 关闭首页的消息提示
        return this.$message({
          message: '这是不能关闭的哦！',
          type: 'warning',
          center: true
        });
      }
      let newtabs = this.tabs;
      // for (let i =0; i < this.tabs.length; i++){
      //   if (newtabs[i].name == targetName) {
      //     newtabs.splice(i, 1);
      //     break;
      //   }
      // }
      // 若删除当前激活的tab页，则重新设置新的激活页
      if (targetName == this.tabsValue) {
        newtabs.forEach((tab, index) => {
          if (tab.name == targetName) {
            let nextTab = newtabs[index + 1] || newtabs[index - 1];
            if (nextTab) {
              this.tabsValue = nextTab.name;
              // console.log(this.tabsValue);
            }
          }
        });
      }
      // 删除需要关闭的tab页
      this.tabs = newtabs.filter(tab => tab.name !== targetName);
      this.$router.push({path: this.tabsValue});
    },
    // 当前激活的tab页
    activeTab (value) {
      this.tabsValue = value;
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
  .exit{
    float: right;
    // position: relative;
    margin-top: 15px;
    margin-right: 20px;
  }
  i{
    font-size: 26px;
    cursor: pointer;
    margin: 0 25px;;
  }
  span{
    font-size: 20px;
  }
}
.content{
  display: flex;
  flex-direction: row;
  .left{
    // width: 260px;
    // border-right: 1px solid #d7d7d7;
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
  .right{
    // min-width: 1200px;
    overflow: hidden;
    width: 100%;
    min-height: 700px;
    margin-left: 46px;
    margin-top: 15px;
    // border: 1px solid #000;
    .table{
      min-height: 40px;
      // min-width: 1000px;
      // border: 1px solid #000;
    }
  }
}
</style>
