<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
  name: 'App',
  created() {
    // 刷新页面是state的数据会重置，需要重新存入
    if (sessionStorage.token) {
      let decode = jwt_decode(sessionStorage.token)
      this.$store.dispatch('setUser', decode.account);
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0px;
  padding: 0px;
}
</style>
