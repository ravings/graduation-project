<template>
  <div>
    <div class="con_title">
      <div class="img">
        <img :src="products.img" alt="" />
      </div>
      <div class="title">
        <h2>{{ products.title}}</h2>
      </div>
    </div>
    <div class="content" v-html="products.content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'communication',
  props: {
    id: String
  },
  data () {
    return {
      products: {},
      img: ''
      // id: this.$route.params.id
    }
  },
  created () {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$ajax.get(`/api/communication/${this.id}`)//'5c93070541224b33700faaa5'
      .then(res => {
        // console.log(res.data);
        // this.img = require(res.data.img);
        // console.log(this.img);
        this.products = res.data;
      })
      .catch(err => {
        console.log('fail...');
      })
    }
  },
  watch: {
    '$route' (to, from) {
        this.getProducts();
    }
  }
}
</script>

<style lang="less" scoped>
.con_title{
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  .img{
    font-size: 0px;
  }
  .title{
    margin-left: 130px;
    padding-top: 20px;
  }
}
.content{
    text-indent: 25pt;
  // p{
    font-size: 14px;
    // line-height: 150%;
    // padding: 5px 0;
    color: #666;
  // }
}
</style>
