<template>
  <div>
    <!-- <div class="list">
      <ul>
        <li @click="show(job.hide, index, $event)" :id="job.id" v-for="(job, index) in jobs" :key="index">
          {{ job.title }}
          <span class="arrow"></span>
          <div class="content">
            <p>
              <strong>招聘人数：</strong>
              <span>{{ job.number }}</span>
            </p>
            <p>
              <strong>学历：</strong>
              <span>{{ job.education }}</span>
            </p>
            <p>
              <strong>专业要求：</strong>
              <span>{{ job.professional }}</span>
            </p>
            <p>
              <strong>任职要求：</strong>
            </p>
            <p v-html="job.requirements"></p>
          </div>
        </li>
      </ul>
    </div> -->
    <el-table :data="jobs" :header-cell-style="headerStyle" :row-style="{height: '80px'}">
      <el-table-column prop="title" label="招聘职位" width="350" align="center"></el-table-column>
      <el-table-column prop="number" label="招聘人数" width="170" align="center"></el-table-column>
      <el-table-column prop="address" label="工作地点" width="170" align="center"></el-table-column>
      <el-table-column prop="time" label="发布时间" align="center"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="scope">
          <p>
            <strong>学历：</strong>
            <span>{{ scope.row.education }}</span>
          </p>
          <p>
            <strong>专业要求：</strong>
            <span>{{ scope.row.professional }}</span>
          </p>
          <p>
            <strong>任职要求：</strong>
          </p>
          <div v-html="scope.row.requirements"></div>
        </template>
      </el-table-column>
    </el-table>
    <p>简历接收邮箱：1072017295@qq.com</p>
  </div>
</template>

<script>
export default {
  name: 'job2',
  data () {
    return {
      // jobs: [
      //   {
      //     id: '01',
      //     title: '前端开发工程师',
      //     number: '若干', //招聘人数
      //     education: '本科及以上',  //学历
      //     professional: '计算机等相关专业',  //专业要求
      //     hide: true,
      //     content: ''
      //   }
      // ]
      jobs: [],
      jobType: ''
    }
  },
  created () {
    this.getjobs();
  },
  watch: {
    '$route'(val) {
      if (val) this.getjobs();
    }
  },
  methods: {
    headerStyle({row, column, rowIndex, columnIndex}) {
      if (columnIndex == 0) {
        return 'background:#12b0dd;color: #fff;height: 100px;font-size: 18px;'
      }
      if (columnIndex == 1) {
        return 'background:#02c768;color: #fff;font-size: 18px;'
      }
      if (columnIndex == 2) {
        return 'background:#dd8012;color: #fff;font-size: 18px;'
      }
      if (columnIndex == 3 || columnIndex == 4) {
        return 'background:#dd4012;color: #fff;font-size: 18px;'
      }
    },
    // show: function (hide, index, e) {
    //   // console.log(index);
    //   let str = e.target;
    //   // let str = document.getElementById(e.target.id);
    //   let arrow = str.childNodes[1];
    //   if(hide){
    //     let divHeight = str.childNodes[2].offsetHeight;
    //     let liHeight = str.offsetHeight;
    //     //ES6模版字符串写法
    //     str.style.height = `${liHeight + divHeight}px`;
    //     arrow.style.transform = 'rotate(135deg)';
    //     this.$set(this.jobs[index], 'hide', false);
    //     // console.log(this.jobs[index]);
    //     // e.target.id-1
    //   }else{
    //     str.style.height = '52px';
    //     arrow.style.transform = 'rotate(45deg)';
    //     this.$set(this.jobs[index], 'hide', true);
    //   }
    // },
    getjobs () {
      if (this.$route.params.title == 'social') {
        this.jobType = 'jobScoial';
      }else {
        this.jobType = 'job'
      }
      this.$ajax.get(`/api/${this.jobType}`)
      .then(res => {
          this.jobs = res.data;
          // console.log(res.data);
        })
        .catch(err => {
            console.log(err);
          })
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  li{
    // border: 1px solid #000;
    height: 51px;
    list-style: none;
    font-size: 18px;
    line-height: 50px;
    border-bottom: 1px dashed #bebebe;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 1s ease-in-out;
    .arrow{
      width: 10px;
      height: 10px;
      display: inline-block;
      border-top: 2px dashed #383838;
      border-right: 2px dashed #383838;
      position: absolute;
      right: 10px;
      top: 23px;
      transform: rotate(45deg);
      transition: transform 1.3s;
    }
    .content{
      margin-left: 30px;
      p{
        // margin: 20px 0;
        font-size: 14px;
      }
    }
  }
}
p{
  padding: 10px 0;
  font-size: 14px;
  color: #666;
}
</style>

