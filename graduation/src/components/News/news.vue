<template>
  <div>
    <div class="news">
      <ul>
        <li v-for="(list, index) in lists" :key="index">
          <h4>{{ list.title }}</h4>
          <div class="con">
            <div class="time">
              <h4>18</h4>
              <p>2019-02</p>
            </div>
            <div class="text">
              <p>{{ list.subtitle }}</p>
              <a href=""> 查看详情> </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.getNews_company();
  },
  methods: {
    getNews_company() {
      this.$ajax.get('/api/news_company')
      .then(res => {
        // console.log(res.data.time);
        this.lists = res.data;
      })
      .catch(err => {
        console.log('fail...');
      })
    }
  }
}
</script>

<style lang="less" scoped>
.news{
  li{
    list-style: none;
    padding: 20px 0;
    border-bottom: 1px dashed #bebebe;
    p{
      color: rgb(102, 102, 102);
      font-size: 15px;
    }
  }
  .con{
    position: relative;
    min-height: 100px;
    margin-top: 20px;
  }
  .time{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    background-color: #ededed;
    h4{
      font-size: 50px;
      font-weight: inherit;
      color: #656565;
      line-height: 1;
      padding-top: 15px;
    }
  }
  .text{
    padding-left: 130px;
    p{
      min-height: 80px;
    }
    a{
      text-decoration: none;
      font-size: 14px;
      color: rgb(102, 102, 102);
      &:hover{
        color: rgba(221, 64, 18, 1);
        // #dd4012
      }
    }
  }
}
</style>
