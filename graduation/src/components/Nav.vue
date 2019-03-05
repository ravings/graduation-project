<template>
  <div>
    <!-- 导航栏 -->
    <div class="div_show">
      <img class="div_img" src="" alt="">
      <nav class="div_nav">
            <router-link class="div_nav_router" id="div_nav_router" v-for="item in list" :key="item" @mouseover.native="show = !show" to="">{{ item }}</router-link>
       </nav>
    </div>
    <!-- 下拉隐藏栏 -->
    <transition>
        <div class="div_hide" v-if="show">
            <ul class="div_hide_product">
                <transition-group>
                    <li v-for="product in hide_list_product" :key="index">
                        <router-link to="">{{ product }}</router-link>
                    </li>
                </transition-group>
            </ul>
            <ul class="div_hide_recruit">
                <transition-group>
                    <li v-for="recruit in hide_list_recruit" :key="index">
                        <router-link to="">{{ recruit }}</router-link>
                    </li>
                </transition-group>
            </ul>
        </div>
    </transition>
  </div>
</template>

<script>
export default{
  name: 'Nav',
  data () {
    return {
      show: true,
      list: ['首页', '关于我们', '产品中心', '人才招聘', '联系我们'],
      hide_list_product: ['产品一号', '产品二号', '产品三号', '产品四号'],
      hide_list_recruit: ['社会招聘', '校园招聘']
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.div_show{
    // width: 1366px;
    height: 70px;
    margin: 0 auto;
    position: relative;
    background-color: #141826;
}
.div_img{
    width: 182px;
    height: 54px;
}
.div_nav{
    position: absolute;
    font-size: 18px;
    right: 30px;
}
.div_nav_router{
    margin-right: 50px;
}
.router-link-active{
    text-decoration: none;
    color: #fff;
}
.router-link-active:hover{
    color: #ff5719;
}
.div_hide{
    // width: 1366px;
    height: 165px;
    margin: 0 auto;
    // position: relative;
    background-color: #141826;
    opacity: 0.75;
    z-index: 100;
    border: 1px solid #000;
    ul{
        text-align: center;
        width: 150px;
    }
    li{
        margin-top: 15px;
        list-style: none;
    }
}
.div_hide_product{
    position: relative;
    float: right;
    // border: 1px solid #000;
    right: 283px;
}
.div_hide_recruit{
    // border: 1px solid #000;
    position: relative;
    float: right;
    right: 8px;

}
// .v-enter{
// }
// .v-enter-active{
//     // transition: all 0.3s ease-in-out;
// }
</style>
