<template>
  <div>
    <div class="con_title">
      <div class="img">
        <!-- ../../assets/product_2.jpg -->
        <img src="../../assets/product_2.jpg" alt="" />
        <!-- ../../../public/img/prodct/product_2.jpg -->
      </div>
      <div class="title">
        <h2>{{ products.title}}</h2>
      </div>
    </div>
    <div class="content" v-html="products.content">
      <!-- <p><strong>基于车型二次识别分析</strong></p>
      <p>平台应能对实时视频流中的车辆进行识别，也能视频录像文件、图片中的车辆进行识别。平台应能识别车辆信息，至少包含车牌号码、车牌类型、车牌颜色、车身颜色、车辆品牌、车系、款型、车辆特征物等，并能给出识别结果的可信度比值以及车辆的抓拍图片，供用户对比审核。</p>
      <p><strong>车辆综合查询</strong></p>
      <p>查找车辆的时候，提交监控点、车牌、车牌颜色、车身颜色、品牌、车系、款型、车道方向、车型、地点、特征物及过车时间段等信息对识别结果进行部分/组合查询。平台支持对目标车辆进行精确查询和模糊查询。</p>
      <p><strong>车辆实时布控</strong></p>
      <p>案件侦破过程中，根据车辆类型、品牌型号、车身颜色、车牌号等部分信息的组合进行布控，从而能够在第一时间发现目标车辆并进行处理。</p>
      <p><strong>以图搜车应用</strong></p>
      <p>根据嫌疑库中车辆的车体视觉特征，建成索引库；当需要进行检索时，上传查询图片，由人工选择出明显的局部视觉特征区域（如车辆年检标志、车前挂饰物品等），平台完成以图搜图的功能。</p>
      <p><strong>智能研判应用</strong></p>
      <p>平台可以实现假套牌车分析、无牌车分析、同行车分析、首次入城分析、频繁过车分析、频繁夜出车辆分析、昼伏夜出车辆分析等智能研判功能，为涉车涉驾案件提供广泛的技术支持。</p>
      <p><strong>GIS应用</strong></p>
      <p>除了实现地图的基本应用，还可以提供以GIS地图为基础，利用平台车辆通行信息实现预警车辆快速定位报警与轨迹显示，并通过嫌疑车辆行驶方向、车速、过车时间综合计算，对预警车辆的位置与轨迹进行预测。</p>
      <p><strong>永久保存半结构化的视频信息</strong></p>
      <p>平台提供视频结构化处理功能，能够将实时视频、录像文件的背景和物件进行处理和分析，将实时视频、录像背景，物件，物件信息分别以数据库文件的方式进行记录，并可以通过点击短片中的事件，回查原始视频，可以实现将有价值的视频进行截取，永久的进行保存。</p>
      <p><strong>基于虚拟化服务的云计算架构</strong></p>
      <p>在架构方面，平台采用标准的SOA架构体系，具有面向服务、模块化、松耦合的特点，采用分布式的部署方式，实现任务的自动分配，虚拟化的云计算模式，模块化设计，利于动态扩展及集中管理。</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'xipro',
  props: {
    id: String,
    type: String
  },
  data () {
    return {
      products: {},
      // id: this.$route.params.id
    }
  },
  created () {
    this.getProducts();
  },
  methods: {
    getProducts() {
      console.log(this.type);
      this.$ajax.get(`/api/${this.type}/${this.id}`)//'5c93070541224b33700faaa5'
      .then(res => {
        // console.log(res.data);
        this.products = res.data;
      })
      .catch(err => {
        console.log('fail...');
      })
    }
  },
  watch: {
    '$route' (to, from) {
        this.getProducts();
    }
    // id: function (val) {
    //   this.getProducts();
    // }
    // id (val) {
    //   if (val) {
    //     this.getProducts();
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
.con_title{
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  .img{
    font-size: 0px;
  }
  .title{
    margin-left: 130px;
    padding-top: 20px;
  }
}
.content{
    text-indent: 25pt;
  // p{
    font-size: 14px;
    // line-height: 150%;
    // padding: 5px 0;
    color: #666;
  // }
}
</style>
