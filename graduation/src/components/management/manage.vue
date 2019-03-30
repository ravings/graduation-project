<template>
  <div class="block">
    <div class="title">
      <i class="el-icon-menu" @click="show_hide"></i>
      <span>公司首页管理系统</span>
      <el-button class="exit" icon="el-icon-star-off" type="warning" size="mini" plain round>退出登录</el-button>
    </div>
    <div class="content">
      <div class="left">
        <el-menu class="el-menu-menu" background-color="#f5f5f5" :collapse="isCollapse" router>
          <div class="img" id="img" >
            <img src="../../assets/05.png" alt="">
            <!-- v-show="!isCollapse" -->
          </div>
          <el-menu-item index="/Management/home">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item index="/Management/Personal_information">个人信息</el-menu-item>
            <el-menu-item index="1-2">管理员信息</el-menu-item>
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
            <el-menu-item index="/Management/news_company">公司新闻</el-menu-item>
            <el-menu-item index="3-2">行业动态</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>产品中心</span>
            </template>
            <el-menu-item index="3-1">通信</el-menu-item>
            <el-menu-item index="/Management/product_city">智慧城市</el-menu-item>
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
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑器</span>
            </template>
            <el-menu-item index="/Management/tinymce" @click="addTab(1,'Tinymce富文本编辑器')">Tinymce富文本编辑器</el-menu-item>
            <el-menu-item index="/Management" @click="addTab(2, 'Markdown编辑器')">Markdown编辑器</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
        <!-- <div class="table">
          <el-tabs type="card" closable v-model="tabsValue" @tab-remove="removeTab">
            <el-tab-pane v-for="(item, index) in tabs" :key="item.index" :label="item.title" :name="item.name">
              {{ item.content }}
              xxxxxxxxxxx -->
              <!-- <router-view/> -->
              <!-- <tinymce></tinymce>
            </el-tab-pane>
          </el-tabs>
        </div> -->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import tinymce from './tinymce.vue'
export default {
  data () {
    return {
      isCollapse: false,
      tabs: [],
      tabsValue: '0',
      tabindex: 0
    }
  },
  components: {
    'tinymce': tinymce
  },
  methods: {
    show_hide () {
      if (this.isCollapse) {
        this.isCollapse = false;
      }else{
        this.isCollapse = true;
      }
    },
    addTab (num, str) {
      let newName = ++this.tabindex + '';
      // if (num == 1){
        this.tabs.push({
        title: str,
        name: newName,
        index: this.tabindex
        // content: ''
      })
      // }

      this.tabsValue = newName;
    },
    removeTab (targetName) {
      // console.log(targetName);
      let newtabs = this.tabs;
      for (let i =0; i < this.tabs.length; i++){
        if (newtabs[i].name == targetName) {
          newtabs.splice(i, 1);
          break;
        }
      }
      this.tabs = newtabs;
      // console.log(this.tabs);
      if (this.tabs.length == 0) {
        this.tabsValue = '0';
        this.tabindex = 0;
      }
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
    // min-width: 1000px;
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
