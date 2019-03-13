<template>
<!-- 员工福利模块 -->
    <div>
        <div class="content">
            <ul>
                <li>
                    <span>01</span>
                    <div class="text">
                        <h3>薪酬</h3>
                        <p>有竞争力的薪资、绩效奖、项目奖、年终奖</p>
                    </div>
                </li>
                <li>
                    <span>02</span>
                    <div class="text">
                        <h3>待遇</h3>
                        <p>六险一金、按岗位购买商业意外保险、生日礼金、节日礼金、节日礼品</p>
                    </div>
                </li>
                <li>
                    <span>03</span>
                    <div class="text">
                        <h3>假期</h3>
                        <p>周末双休、带薪年假、国家法定节假日、婚假、产假、哺乳假等</p>
                    </div>
                </li>
                <li>
                    <span>04</span>
                    <div class="text">
                        <h3>补贴</h3>
                        <p>通讯补贴、交通补贴、出差补贴</p>
                    </div>
                </li>
                <li>
                    <span>05</span>
                    <div class="text">
                        <h3>体检</h3>
                        <p>每年安排一次员工健康体检、免费健康讲座等</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="less" scoped>
.content{
    li{
        padding: 15px;
        width: 415px;
        height: 80px;
        // width: 50%;
        list-style: none;
        float: left;
        margin-bottom: 15px;
    }
    span{
        // border: 1px solid #000;
        display: block;
        float: left;
        text-align: center;
        font-weight: bold;
        font-size: 34px;
        color: #dd4012;
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin-right: 30px;
        background: url('../../assets/treatment_ico_1.png') no-repeat center;
    }
    .text{
        // border: 1px solid #000;
        padding: 10px 20px;
        // float: right;
        p{
            font-size: 14px;
            color: rgb(102, 102, 102);
            margin-top: 10px;
        }
    }
}
</style>
