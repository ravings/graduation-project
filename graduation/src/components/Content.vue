<template>
    <div>
        <div class="about_us">
            <el-row :gutter="20">
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
.el-row{
    &:last-child{
        margin-bottom: 0px;
    }
}
.about_us div{
    height: 350px;
    font-family: Arial, 微软雅黑;
}
.about_us .about_us_title{
    color: #dd4012;
    font-size: 36px;
    h2{
        padding-top: 50px;
    }
}
.about_us .about_us_title_one, .about_us_title_two, .about_us_title_three{
    h3{
        margin-top: 112px;
    }
    a{
        display: block;
        text-align: center;
        text-decoration: none;
        width: 160px;
        background-color: #000;
        color: #fff;
        position: absolute;
        bottom: 80px;
        line-height: 43px;
    }
    a:hover{
        background-color: #dd4012;
    }
}
</style>
