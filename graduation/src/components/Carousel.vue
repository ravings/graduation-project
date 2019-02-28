<template>
  <div class="div">
    <el-carousel type="card" height="360px">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <img :src="item.src" alt="">
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
            src: require('../assets/00.png')
        },
        {
            src: require('../assets/01.png')
        },
        {
            src: require('../assets/02.png')
        },
        {
            src: require('../assets/03.png')
        },
        {
            src: require('../assets/04.png')
        },
        {
            src: require('../assets/05.png')
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
