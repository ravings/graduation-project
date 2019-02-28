<template>
  <div class="div">
    <el-carousel type="" height="360px">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <router-link :to="item.url">
            <img :src="item.src" alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
        imgs: [{
            src: require('../assets/10.png'),
            url: ''
        },
        {
            src: require('../assets/11.png'),
            url: ''
        },
        {
            src: require('../assets/12.png'),
            url: ''
        }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img{
    width: 100%;
    height: 100%;
}
</style>
