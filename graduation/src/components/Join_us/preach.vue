<template>
  <div>
    <div class="content">
      <el-table class="table" border stripe :data="tableData" :header-cell-style="{background:'#dd4012', color: '#fff'}">
        <el-table-column label="序号" type="index" width="110" align="center"></el-table-column>
        <el-table-column prop="city" label="城市" width="260" align="center"></el-table-column>
        <el-table-column prop="time" label="宣讲时间" width="260" align="center"></el-table-column>
        <el-table-column prop="address"  label="宣讲地点" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          city: '广州',
          time: '2019-03-15',
          address: '中山大学'
        },
        {
          city: '深圳',
          time: '2019-03-18',
          address: '深圳大学'
        },
        {
          city: '上海',
          time: '2019-04-10',
          address: '华东交通大学'
        },
        {
          city: '厦门',
          time: '2019-05-21',
          address: '厦门大学'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.content{
  width: 890px;
  // background-color: #dd4012;
}
</style>

