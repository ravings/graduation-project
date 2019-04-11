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
      data: [],
      data2: [],
      theData: [],
      theData2: []
    }
  },
  mounted () {
    this.getData();
    this.getData2();
    // this.drawLine();
  },
  methods: {
    getData() {
      this.$ajax.get('/api/news_company').then(res => {
        this.data = res.data;
        this.get(this.data, 'news_company');
        this.drawLine();
      }).catch(err => {
        console.log(err);
      })
    },
    getData2() {
      this.$ajax.get('/api/news_industry').then(res => {
        this.data2 = res.data;
        this.get(this.data2, 'news_industry');
        this.drawLine();
      }).catch(err => {
        console.log(err);
      })
    },
    get(arr, type) {
      let Jan = 0; let Feb = 0;
      let Mar = 0; let Apr = 0;
      let May = 0; let Jun = 0;
      let Jul = 0; let Aug = 0;
      let Sept = 0; let Oct = 0;
      let Nov = 0; let Dec = 0;
      const year = new Date().getFullYear();
      // const year = date.getFullYear();
      for (let i = 0; i < arr.length; i++) {
        // 2018-03-10
        const theYear = arr[i].time.substr(0, 4);
        const mon = arr[i].time.substr(5, 2);
        if (year == theYear) {
          if (mon == '01') Jan++;
          if (mon == '02') Feb++;
          if (mon == '03') Mar++;
          if (mon == '04') Apr++;
          if (mon == '05') May++;
          if (mon == '06') Jun++;
          if (mon == '07') Jul++;
          if (mon == '08') Aug++;
          if (mon == '09') Sept++;
          if (mon == '10') Oct++;
          if (mon == '11') Nov++;
          if (mon == '12') Dec++;
        }else {
          continue;
        }
      }
      if (type == 'news_company') this.theData.push(Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec);
      if (type == 'news_industry') this.theData2.push(Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec);
    },
    drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'));
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
                // data: [5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0]
                data: this.theData
            },
            {
                name: '行业动态',
                type: 'bar',
                // data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
                data: this.theData2
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
