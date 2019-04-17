<template>
  <div>
    <div class="title">
      <h2>{{ lists.title }}</h2>
      <span>发布时间：{{ lists.time }}</span>
    </div>
    <div class="content" v-html="lists.content"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  data () {
    return {
      lists: {},
      id: this.$route.params.id
      // id: this.$route.query.id,
      // type: this.$route.query.type
    }
  },
  created () {
    this.getNews();
  },
  methods: {
    getNews() {
      // console.log(this.id);
      this.$ajax.get(`/api/${this.type}/findById/${this.id}`)//'5c93070541224b33700faaa5'
      .then(res => {
        // console.log(res.data);
        this.lists = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  watch: {
    type(val){
      if(val){
        this.getNews_company();
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  text-align: center;
  h2{
    padding: 10px 0;
  }
  span{
    font-size: 14px;
    color: #999;
    padding: 10px 0;
  }
}
</style>
