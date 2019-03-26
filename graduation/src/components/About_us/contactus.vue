<template>
    <div>
        <div class="title">
            <h2>中国未来科技技术股份有限公司</h2>
            <p>China future technology co. LTD</p>
        </div>
        <div class="content">
            <div class="content_left">
                <ul>
                    <li>
                        <div><img src="../../assets/contactus_ico_1.png" alt=""></div>
                        <p>联系电话： 020-82598555</p>
                    </li>
                    <li>
                        <div><img src="../../assets/contactus_ico_2.png" alt=""></div>
                        <p>传真号码： 020-82599989</p>
                    </li>
                    <li>
                        <div><img src="../../assets/contactus_ico_3.png" alt=""></div>
                        <p>公司地址：广州市天河区高普路168号广州高科科技园</p>
                    </li>
                </ul>
            </div>
            <div class="content_right">
                <img src="../../assets/Qrcode.png" alt="">
                <p>微信公众号</p>
            </div>
        </div>
        <div class="map" id="map"></div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  mounted() {
    this.getMap();
  },
  methods: {
    getMap () {
      // 创建地图实例
      let map = new BMap.Map('map');
      // 创建中心点坐标
      let point = new BMap.Point(113.331063, 23.111656);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 16);
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      // 创建标注
      var marker = new BMap.Marker(point);
      // 将标注添加到地图中
      map.addOverlay(marker);

      let opts = {
        width: 250,
        height: 100,
        title: '中国未来科技技术股份有限公司'
        // content: '联系电话： 020-82598555<br/>传真号码： 020-82599989<br/>公司地址：广州市天河区高普路168号广州高科科技园',
        // point: '113.331063|23.111656'
      }
      // 创建信息窗口对象
      let infowindow = new BMap.InfoWindow('公司地址：广州市天河区高普路168号广州高科科技园', opts);
      marker.addEventListener("click", function(){
        map.openInfoWindow(infoWindow,point); //开启信息窗口
      });
    }
  }
}
</script>

<style lang="less" scoped>
.title{
    p{
        font-size: 16px;
        color: #c5c5c5;
    }
}
.content{
    display: flex;
    flex-direction: row;
    .content_left{
        ul{
            margin-top: 20px;
        }
        li{
            list-style: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 25px 0;
            div{
                font-size: 0px;
            }
            p{
                font-size: 14px;
                margin-left: 10px;
                color: rgb(102, 102, 102);
            }
        }
    }
    .content_right{
        font-size: 0px;
        margin-top: 10px;
        margin-left: 250px;
        p{
            text-align: center;
            font-size: 14px;
            margin-left: 10px;
            color: rgb(102, 102, 102);
        }
    }
}
.map{
  height: 410px;
  width: 790px;
}
</style>
