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
    if (localStorage.token) {
      let decode = jwt_decode(localStorage.token)
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
