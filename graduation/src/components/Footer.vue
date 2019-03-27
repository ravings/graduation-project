<template>
    <div class="footer">
        <div class="foot_left">
            <div class="logo">
                <img src="../assets/logo_01.png" alt="">
                <p>中国未来科技技术股份有限公司</p>
            </div>
            <div class="address">
                <i class="el-icon-location-outline"><span>地址：广州市海珠区广州塔</span></i>
                <i class="el-icon-phone-outline"><span>电话：020-82598555</span></i>
                <i class="el-icon-printer"><span>传真：020-82599989</span></i>
            </div>
        </div>
        <div class="foot_right">
            <ul class="ul">
                <li><h3><a href="/AboutUs/about">关于我们</a></h3>
                    <dl>
                        <dd><a href="/AboutUs/about">企业简介</a></dd>
                        <dd><a href="/AboutUs/culture">企业文化</a></dd>
                        <dd><a href="/AboutUs/contactus">联系我们</a></dd>
                        <dd><a href="/Login">员工通道</a></dd>
                    </dl>
                </li>
                <li><h3><a href="/News">新闻资讯</a></h3>
                    <dl>
                        <dd><a href="">公司新闻</a></dd>
                        <dd><a href="">行业动态</a></dd>
                    </dl>
                </li>
                <li><h3><a href="/Product">产品中心</a></h3>
                    <dl>
                        <dd><a href="">通信</a></dd>
                        <dd><a href="/Product/xipro">智慧城市</a></dd>
                    </dl>
                </li>
                <li><h3><a href="/JoinUs/treatment">加入我们</a></h3>
                    <dl>
                        <dd><a href="/JoinUs/treatment">员工成长</a></dd>
                        <dd><a href="/JoinUs/job2">社会招聘</a></dd>
                        <dd><a href="/JoinUs/job2">校园招聘</a></dd>
                    </dl>
                </li>
            </ul>
            <div class="img">
                <img src="../assets/Qrcode.png" alt="">
                <p>微信公众号</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer{
    // border: 1px solid #000;
    display: flex;
    flex-direction: row;
    padding: 40px 0;
    background-color: rgba(221, 64, 18, 1);
    color: #fff;
}
.logo{
  display: flex;
  flex-direction: row;
  font-size: 22px;
  align-items: center;
  p{
    padding: 0 15px;
  }
}
.foot_left{
    // border: 1px solid #000;
    margin-top: 30px;
    margin-left: 70px;
    margin-right: 70px;
    .address{
        margin-top: 20px;
        i{
            display: block;
            padding: 10px 0;
            span{
                padding-left: 10px;
            }
        }
    }
}
.foot_right{
    margin-top: 20px;
    // margin-left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .img{
        text-align: center;
    }
    .ul{
        display: flex;
        flex-direction: row;
        margin-right: 30px;
        li{
            dl{
                margin-top: 10px;
                dd{
                    padding: 8px;
                }
            }
            h3{
                font-size: 24px;
                padding: 15px 0;
                border-bottom: 1px solid #fff;
            }
            a{
                text-decoration: none;
                color: #fff;
            }
            list-style: none;
            // border: 1px solid #000;
            // font-size: 18px;
            padding: 0 25px;
        }
    }
}
</style>
