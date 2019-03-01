<template>
    <div>
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
                        <a href="">企业概况</a>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="about_us_title_two">
                        <h3>公司成立于xxxx年，坐落在国家软件产业基地</h3>
                        <a href="">发展历程</a>
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
    </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.about_us{
    // padding-left: 15px;
    // padding-right: 15px;
    margin-left: 25px;
    margin-right: 25px;
}
.el-col-6{
    height: 350px;
    font-family: Arial, 微软雅黑;
    border-left: 1px solid rgba(20, 24, 38, 0.1);
    &:first-child{
        border: none;
    }
}
.about_us .about_us_title{
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
        // position: absolute;
        bottom: 80px;
        line-height: 43px;
    }
    a:hover{
        background-color: #dd4012;
    }
}
</style>
