<template>
  <div id="app">
      <Nav></Nav>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
    name: 'App',
    components: {
        'Nav': Nav
    },
    methods: {
        // show() {
        //     let str = document.getElementById('div_hide');
        //     str.style.display = 'block';
        //     str.style.transform = 'translate(0,165px)';
        //     str.style.transition = 'all 0.3s ease-in-out';
        // },
        // change() {
        //     let s = document.getElementById('div_nav_router');
        //     s.style.color = 'blue';
        // }
    }
}
</script>

<style lang="less">
*{
    margin: 0px;
    padding: 0px;
}
</style>
