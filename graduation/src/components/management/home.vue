<template>
  <div class="block">
    <div class="myChart" id="myChart"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '新闻发布数' },
            tooltip: {
              trigger: 'axis'
            },
            toolbox: {
              show : true,
              feature : {
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
            },
            calculable : true,
            legend: {
              data:['公司新闻','行业动态']
            },
            xAxis: {
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            },
            yAxis: {},
            series: [{
                name: '公司新闻',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
            },
            {
                name: '行业动态',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>

<style lang="less" scoped>
.block{
  min-width: 1000px;
  min-height: 600px;
  // border: 1px solid #000;
}
.myChart{
  // width: 900px;
  height: 400px;
}
</style>
