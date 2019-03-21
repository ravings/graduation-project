<template>
  <div>
    <div class="list">
      <ul>
        <li @click="show(job.hide, $event)" :id="job.id" v-for="(job, index) in jobs" :key="index">
          <!-- 前端开发工程师 -->
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
              <!-- 1、对HTML5、CSS3、JavaScriptES5、ES6、jQuery、Vue.js、Node.js、Http1.0~2.0、webpack，对TypeScript有一定的了解；<br>
              2、对构建响应式页面、触屏端页面有一定的经验并熟练掌握；<br>
              3、熟悉Restful api的设计，能够参与或主导前后端分离的接口设计；<br>
              4、能够熟练使用chrome开发者工具，了解并可以处理IE11及以上主流浏览器兼容性问题；<br>
              5、对W3C、IEEE等国际标准化在前端领域和浏览器的标准有全面的了解；<br>
              6、关注用户体验，具备一定的用户体验思维和积累，具有较强的责任心，对完成的业务工作的目标和效果敏感；<br>
              7、具备web开发中性能优化，安全防护等常见问题及解决方案等基础知识；<br>
              8、对技术有极大的热情和自驱性，能够独立自主的提升自身技术能力及推进新技术，新组件框架的开发和运用；能够很好规划自己的成长路径和提升目标；<br>
              9、具备的沟通协作能力；乐于分享和技术交流；具备优秀的学习能力。 -->
          </div>
        </li>
      </ul>
    </div>
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
      jobs: []
    }
  },
  created () {
    this.getjobs();
  },
  methods: {
    show: function (hide, e) {
      let str = e.target;
      // let str = document.getElementById(e.target.id);
      let arrow = str.childNodes[1];
      if(hide){
        let divHeight = str.childNodes[2].offsetHeight;
        let liHeight = str.offsetHeight;
        //ES6模版字符串写法
        str.style.height = `${liHeight + divHeight}px`;
        arrow.style.transform = 'rotate(135deg)';
        this.$set(this.jobs[e.target.id-1], 'hide', false);

      }else{
        str.style.height = '52px';
        arrow.style.transform = 'rotate(45deg)';
        this.$set(this.jobs[e.target.id-1], 'hide', true);
      }
    },
    getjobs () {
      let _this = this;
      this.$ajax.get('/api/job')
      .then(res => {
          _this.jobs = res.data;
          // console.log(res.data);
        })
        .catch(err => {
            console.log('fail...');
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
</style>

