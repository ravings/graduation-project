<template>
  <div>
    <div class="news">
      <ul>
        <li v-for="(list, index) in sortByKey(this.lists, 'time')" :key="index">
          <h4>{{ list.title }}</h4>
          <div class="con">
            <div class="time">
              <h4>{{ list.day }}</h4>
              <p>{{ list.year }}</p>
            </div>
            <div class="text">
              <p>{{ list.subtitle }}</p>
              <router-link :to="`/News/news_show/${list._id}`"> 查看详情> </router-link>
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
  props: {
    type: String
  },
  data () {
    return {
      lists: [],
    }
  },
  created () {
    this.getNews_company();
  },
  methods: {
    getNews_company() {
      // console.log(this.type);
      this.$ajax.get(`/api/${this.type}`)
      .then(res => {
        this.lists = res.data;
        // this.newLists = this.sortByKey(this.lists, 'time');
        this.getDay(this.lists);
      })
      .catch(err => {
        console.log(err);
      })
    },
    getDay(arr){
      for (let i =0; i < arr.length; i++) {
        // 2018-03-10
        this.lists[i].day = arr[i].time.substr(8,2);
        this.lists[i].year = arr[i].time.substr(0, 7);
        // console.log(this.lists[i].day);
      }
    },
    sortByKey(arr, key) {
      // 注意：不能直接用 sort() ,要先copy一份在排序 -->>用slice()来copy
      // 若直接用则会报错：无限循环
      return arr.slice().sort(
        function (a, b) {
          let x = a[key];
          let y = b[key];
          let xDate = new Date(x.replace(/-/g, '/')).getTime();
          let yDate = new Date(y.replace(/-/g, '/')).getTime();

          return xDate < yDate ? 1 : -1;
        }
      )
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
