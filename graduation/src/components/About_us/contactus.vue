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
                <img src="../../assets/Qrcode_one.png" alt="">
                <p>微信公众号</p>
            </div>
        </div>
    </div>
</template>


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
</style>
