<template>
  <div id="app">
      <Nav></Nav>
      <Carousel></Carousel>
      <Content></Content>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Carousel from './components/Carousel.vue'
import Content from './components/Content.vue'
export default {
    name: 'App',
    components: {
        'Nav': Nav,
        'Carousel': Carousel,
        'Content': Content
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
