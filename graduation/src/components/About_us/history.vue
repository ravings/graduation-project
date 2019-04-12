<template>
    <div class="block">
        <el-timeline class="el-timeline">
            <el-timeline-item v-for="(list, index) in lists" :key="index" :timestamp="list.time" placement="top" color="#12c3dd">
                <el-card>
                    <!-- <h4>{{ list.title }}</h4> -->
                    <!-- <p>{{ list.content }}</p> -->
                    <div v-html="list.content"></div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.gethistory();
  },
  methods: {
    // 根据时间对数据进行排序
    sortByTime(arr, key) {
      return arr.slice().sort((a, b) => {
        // 2018-2019
        const x = a[key].substr(0, 4);
        const y = b[key].substr(0, 4);
        return y - x;
      })
    },
    gethistory() {
      this.$ajax.get('/api/history')
      .then(res => {
        // console.log(res.data);
        this.lists = this.sortByTime(res.data, 'time');
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="less" scoped>
.block{
    padding: 0 150px;

}
.el-timeline-item__timestamp{
        font-size: 24px;
        color: #dd4012;
    }
</style>
