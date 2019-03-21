<template>
    <div class="block">
        <el-timeline class="el-timeline">
            <el-timeline-item v-for="(list, index) in lists" :key="index" :timestamp="list.time" placement="top" color="#12c3dd">
                <el-card>
                    <h4>{{ list.title }}</h4>
                    <p>{{ list.content }}</p>
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
    gethistory() {
      // let _this = this;
      this.$ajax.get('/api/history')
      .then(res => {
        // console.log(res.data);
        this.lists = res.data;
        console.log(this.lists);
      })
      .catch(err => {
        console.log('fail...');
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
