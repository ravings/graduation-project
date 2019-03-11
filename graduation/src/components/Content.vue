<template>
    <div>
        <div class="div">
            <el-carousel type="" height="360px">
            <el-carousel-item v-for="(item, index) in imgs" :key="index">
                <router-link :to="item.url">
                    <img :src="item.src" alt="" style="height: 100%; width: 100%;">
                </router-link>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="about_us">
            <el-row :gutter="50">
                <el-col :span="6">
                    <div class="about_us_title">
                        <h2>ABOUT US</h2>
                        <p>关于我们</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="about_us_title_one">
                        <h3>公司围绕通信、智慧城市业务板块，成为一流的运营商服务提供商和一流的智慧城市建设运营商</h3>
                        <a href="/AboutUs/about">企业概况</a>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="about_us_title_two">
                        <h3>公司成立于xxxx年，坐落在国家软件产业基地</h3>
                        <a href="/AboutUs/history">发展历程</a>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="about_us_title_three">
                        <h3>超越客户期望，成就客户价值</h3>
                        <a href="">企业文化</a>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="news">
            <el-row :gutter="50">
                <el-col :span="6">
                    <div class="news_title">
                        <h2>NEWS</h2>
                        <p>新闻资讯</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="news_title_one">
                        <div class="news_title_one_head">
                            <p>公司新闻</p>
                            <p>Company news</p>
                        </div>
                        <div class="news_title_one_img">
                            <img :src="news_imgs.src" alt="">
                            <p>2018完美收官 ，2019美好启程</p>
                        </div>
                        <div class="news_title_one_list">
                            <div>
                                <a href="">More+</a>
                            </div>
                            <ul>
                                <li><a href="">xxxxxxxxxxxxx</a></li>
                                <li><a href="">xxxxxxxxxxxxxxxxx</a></li>
                                <li><a href="">xxxxxxxxxxxxxxxxxxxxx</a></li>
                                <li><a href="">xxxxxxxxxxxxxxxxxxxxxxxx</a></li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="news_title_two">
                        <div class="news_title_two_title">
                            <p>行业新闻</p>
                            <p>Industry</p>
                        </div>
                        <div class="news_title_two_list">
                            <div>
                                <a href="">More+</a>
                            </div>
                            <ul>
                                <li><a href="">xxxxxxxxxxxxx</a></li>
                                <li><a href="">xxxxxxxxxxxxxxxxx</a></li>
                                <li><a href="">xxxxxxxxxxxxxxxxxxxxx</a></li>
                                <li><a href="">xxxxxxxxxxxxxxxxxxxxxxxx</a></li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="product">
            <el-row :gutter="50">
                <el-col :span="6">
                    <div class="product_title">
                        <h2>PRODUCT CENTER</h2>
                        <p>产品中心</p>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div class="product_one">
                        <img src="../assets/city_logo_1.png" alt="">
                        <div>
                            <h3><a href="">智慧城市</a></h3>
                            <p>围绕“改变城市管理现状，全面提升城市效率”的宗旨，致力成为国内智慧城市领域一流的产品和综合解决方案提供商</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div class="product_two"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            news_imgs:{
                src: require('../assets/03.png'),
                url: ''
            },
            imgs: [{
                src: require('../assets/10.png'),
                url: ''
            },
            {
                src: require('../assets/11.png'),
                url: ''
            },
            {
                src: require('../assets/12.png'),
                url: ''
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.about_us, .news, .product{
    padding-left: 25px;
    padding-right: 25px;
    // border: 1px solid #000;
    // margin-left: 25px;
    // margin-right: 25px;
    height: 350px;
    font-family: Arial, 微软雅黑;
}
.about_us{
    .el-col-6{
        border-left: 1px solid rgba(20, 24, 38, 0.1);
        &:first-child{
            border: none;
        }
    }
}
.news{
        background-color: rgba(221, 64, 18, 1);
        overflow: hidden;
    .el-row{
        // background: url('../assets/nimg1920_1bg.png') no-repeat;
        // background-size: cover;
        color: #fff;
        .news_title{
            font-size: 36px;
            h2{
                padding-top: 50px;
            }
        }
    }
}
.about_us_title, .product_title{
    color: #dd4012;
    font-size: 36px;
    h2{
        padding-top: 50px;
    }
}
.about_us .about_us_title_one, .about_us_title_two, .about_us_title_three{
    margin-top: 112px;
    h3{
        min-height: 75px;
        margin-bottom: 40px;
    }
    a{
        display: block;
        text-align: center;
        text-decoration: none;
        width: 160px;
        height: 43px;
        background-color: #000;
        color: #fff;
        bottom: 80px;
        line-height: 43px;
        margin-bottom: 80px;
    }
    a:hover{
        background-color: #dd4012;
    }
}
.news_title_one_head, .news_title_two_title{
    margin-top: 20px;
    width: 140px;
    height: 44px;
    font-size: 18px;
    p{
        margin-left: 13px;
    }
    border-left: 3px solid #fff;
}
.news_title_one_img{
    float: left;
    margin-top: 25px;
    border: 1px solid #fff;
    width: 280px;
    height: 240px;
    margin-bottom: 40px;
    img{
        width: 280px;
        height: 200px;
    }
    p{
        display: block;
        text-align: center;
        line-height: 40px;
    }
}
.news_title_one_list, .news_title_two_list{
    // border: 1px solid #fff;
    position: relative;
    width: 290px;
    float: right;
    div {
        overflow: hidden;
        a{
            float: right;
            text-decoration: none;
            color: #fff;
            margin: 15px 0;
        }
    }
    li{
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 1px dashed #fff;
        padding: 15px 0;
        list-style: none;
        a{
            text-decoration: none;
            color: #fff;
        }
    }
}
.product{
    .el-col-9{
        border-left: 1px solid rgba(20, 24, 38, 0.1);
        &:first-child{
            border: none;
        }
    }
}
.product_one, .product_two{
    height: 350px;
    display: flex;
    align-items: center;
    div{
        margin-left: 20px;
        margin-top: -60px;
        h3{
            padding: 20px 0;
            font-size: 26px;
            a{
                text-decoration: none;
                color: #000;
                &:hover{
                    color: #dd4012;
                }
            }
        }
    }
}

</style>
