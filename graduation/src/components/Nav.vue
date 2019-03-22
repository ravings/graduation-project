<template>
  <div>
    <!-- 导航栏 -->
    <div class="div_show" id="div_show">
      <div class="nav_show">
        <div class="logo">
          <img class="div_img" src="../assets/logo_01.png" alt="">
          <p>中国科技技术股份有限公司</p>
        </div>
        <div class="nav">
          <nav class="div_nav" @mouseover="show"><!--  -->
                <router-link class="div_nav_router" v-for="(item, index) in list" :key="index"
                 :to="item.url">{{ item.name }}</router-link>
          </nav>
        </div>
      </div>
      <!-- 下拉隐藏栏 -->
      <div class="div_hide" @mouseleave="hide">
            <ul class="div_hide_product">
                <!-- <transition-group tag="div"> -->
                    <li v-for="product in hide_list_product" :key="product.id">
                        <router-link :to="product.url">{{ product.name }}</router-link>
                    </li>
                <!-- </transition-group> -->
            </ul>
            <ul class="div_hide_recruit">
                <!-- <transition-group tag="div"> -->
                    <li v-for="recruit in hide_list_recruit" :key="recruit.id">
                        <router-link :to="recruit.url">{{ recruit.name }}</router-link>
                    </li>
                <!-- </transition-group> -->
            </ul>
        </div>
    </div>
    <div style="height: 87px;"></div>
  </div>
</template>

<script>
export default{
  name: 'Nav',
  data () {
    return {
      list: [
          {
              name: '首页',
              url: '/'
        },
        {
            name: '关于我们',
            url: '/AboutUs/about'
        },
        {
            name: '产品中心',
            url: ''
        },
        {
            name: '人才招聘',
            url: '/JoinUs/job2'
        },
        {
            name: '联系我们',
            url: '/AboutUs/contactus'
        }],
      hide_list_product: [
        {
          id: '1',
          name: '通信',
          url: ''
        },
        {
          id: '2',
          name: '智慧城市',
          url: '/Product/xipro'
        }
      ],
      hide_list_recruit: [{
        id: '01',
        name: '社会招聘',
        url: '/JoinUs/job2'
      },
      {
        id: '02',
        name: '校园招聘',
        url: ''
      }]
    }
  },
  methods: {
    show: function () {
      let str = document.getElementById('div_show');
      str.style.height = '252px';
    },
    hide: function () {
      let str = document.getElementById('div_show');
      str.style.height = '87px';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.div_show{
    // border: 1px solid #fff;
    width: 100%;
    height: 87px;
    color: #fff;
    position: absolute;
    overflow: hidden;
    transition: all .4s ease-in-out;
}
.nav_show{
    background-color: #141826;
    overflow: hidden;
}
.logo{
  display: flex;
  align-items: center;
  float: left;
  margin-bottom: 10px;
}
.div_img{
    margin-left: 60px;
    margin-top: 10px;
}
p{
    display: inline-block;
    // border: 1px solid #fff;
    margin-left: 18px;
    font-size: 24px;
}
.nav{
    // border: 1px solid #fff;
    width: 560px;
    margin-left: 750px;
    font-size: 18px;
    margin-top: 22px;
    padding: 10px;
    padding-bottom: 29px;
    &:hover{
      .div_show{
        height: 252px;
      }
    }
}
a{
    text-decoration: none;
    color: #fff;
}
.div_nav_router{
    margin-right: 50px;
}
.router-link-active{
    text-decoration: none;
    color: #fff;
}
.router-link-active:hover{
    color: #dd4012;
}
.div_hide{
    height: 165px;
    position: relative;
    // background-color: #141826;
    // opacity: 0.5;
     background: rgba(24, 29, 31, 0.75);
    overflow: hidden;
    z-index: 9999;
    ul{
        text-align: center;
        width: 150px;
        padding-top: 20px;
    }
    li{
        margin-bottom: 15px;
        list-style: none;
        font-size: 16px;
        // font-weight: bold;
    }
}
.div_hide_product{
    position: relative;
    float: right;
    right: 270px;
    // left: 810px;
}
.div_hide_recruit{
    // border: 1px solid #000;
    position: relative;
    left: 1050px;

}
</style>
