<template>
    <div>
        <div class="img">
            <img src="../assets/product_1.jpg" alt="">
        </div>
        <div class="title">
            <h3>产品中心</h3>
            <p>PRODUCTS</p>
        </div>
        <div class="pagecontent">
            <div class="leftnav">
                <el-menu active-text-color="#dd4012" @open="change" router unique-opened>
                    <el-submenu index="1">
                        <template slot="title">
                            <span>通信</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                        <!-- <el-menu-item index=""></el-menu-item>
                        <el-menu-item index=""></el-menu-item> -->
                        <!-- </el-menu-item-group> -->
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>智慧城市</span>
                        </template>
                        <el-menu-item index="/Product/xipro">车辆大数据侦查平台</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="right_content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'joinus',
  methods: {
    change: function (e) {
      if (e) {
        console.log(e.target);
        // e.target.style.background = '#dd4012';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.img{
    font-size: 0px;
    img{
        width: 100%;
        // height: 100%;
    }
}
.title{
        // height: 60px;
        width: 250px;
        color: #fff;
        background-color: rgba(221, 64, 18, 1);
        font-size: 28px;
        text-align: center;
        padding: 10px 0;
        margin-top: -50px;
        margin-left: 60px;
        z-index: 100;
}
.pagecontent{
    display: flex;
    flex-direction: row;
    .leftnav{
        width: 250px;
        margin-left: 60px;
        margin-top: 30px;
        .el-menu{
            background-color: #e5e5e5;
            span{
                font-size: 19px;
            }
        }
    }
    .right_content{
        width: 900px;
        margin-top: 30px;
        margin-left: 40px;
        padding: 20px;
        min-height: 700px;
        // border: 1px solid #000;
        // height: 200px;
    }
}
</style>
