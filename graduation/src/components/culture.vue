<template>
    <div class="block">
        <img src="../assets/culture_1.jpg" alt="">
        <div class="list_1">
            <em><img src="../assets/culture_ico_1.png" alt=""></em>
            <div class="text">
                <h3>使命</h3>
                <p class="p1">超越客户期望，持续成就客户价值</p>
                <p class="p2">成为国内一流的运营商服务提供商，致力于为客户提供一流的服务，为员工提供最佳的成长机会，为股东创造丰厚的回报。</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.block{
    .list_1{
        overflow: hidden;
        padding: 20px 0;
        border-bottom: 1px solid rgba(20, 24, 38, 0.1);
        em{
            float: left;
        }
        .text{
            // border: 1px solid #000;
            float: left;
            width: 830px;
            margin-left: 20px;
            h3{
                color: #f2572a;
                font-size: 24px;
            }
            .p1{
                font-size: 18px;
                font-weight: bold;
                padding: 5px 0;
            }
            .p2{
                font-size: 14px;
                color: rgb(102, 102, 102);
                line-height: 2;
            }
        }


    }
}
</style>
