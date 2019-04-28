<template>
  <div>
    <div class="breadcrumb">
      <div>
        <i class="el-icon-location-outline"></i>
          <span>当前位置：</span>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item  to="/" class="item">首页</el-breadcrumb-item>
        <el-breadcrumb-item  class="item" v-for="(list, index) in levelList" :key="index">{{ list }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    // 监听路由
    '$route'(val) {
      this.getBreadcrumb(val);
    }
  },
  mounted() {
    this.getBreadcrumb(this.$route);
  },
  methods: {
    getBreadcrumb(val) {
      if (this.levelList) this.levelList.splice(0, this.levelList.length);
      val.matched.forEach((item, index) => {
        this.levelList.push(item.meta.title);
      })
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb{
  position: absolute;
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
</style>

