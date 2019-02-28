<template>
  <div id="app">
      <Nav></Nav>
      <Carousel></Carousel>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Carousel from './components/Carousel.vue'
export default {
    name: 'App',
    components: {
        'Nav': Nav,
        'Carousel': Carousel
    },
    methods: {
    }
}
</script>

<style lang="less">
*{
    margin: 0px;
    padding: 0px;
}
</style>
