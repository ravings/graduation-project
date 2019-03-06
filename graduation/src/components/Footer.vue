<template>
    <div class="footer">
        <div class="foot_left">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="address">
                <i class="el-icon-location-outline"><span>地址：广州市天河区高普路168号广州高科科技园</span></i>
                <i class="el-icon-phone-outline"><span>电话：020-82598555</span></i>
                <i class="el-icon-printer"><span>传真：020-82599989</span></i>
            </div>
        </div>
        <div class="foot_right">
            <ul>
                <li><a href="">关于我们</a></li>
                <li><a href="">产品中心</a></li>
                <li><a href="">人才招聘</a>
                    <ul>
                        <li><a href="">社会招聘</a></li>
                        <li><a href="">校园招聘</a></li>
                    </ul>
                </li>
                <li><a href="">联系我们</a></li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer{
    border: 1px solid #000;
    display: flex;
    flex-direction: row;
}
// .logo{
//     margin: 20px 0;
// }
.foot_left{
    border: 1px solid #000;
    margin-top: 60px;
    margin-left: 80px;
}
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
</style>
