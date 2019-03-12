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
        <div class="list_2">
            <em><img src="../assets/culture_ico_2.png" alt=""></em>
            <div class="text">
                <h3>理念</h3>
                <p class="p1">创造性解决</p>
                <p class="p2">责任是本质：创造性解决，本质上是我们的责任：对全体员工、对客户、对通信事业、对股东的责任。
                    我们庄严承诺：无论何时，无论何地，我们都将执着前行，永不放弃。因为责任，我们的“做强、做大、做久”有了根本动力。
                    抱负是核心：创造性解决，核心在于我们的抱负：抱负是一种催人奋进的力量，没有抱负的人如同没有鞭策的马，是跑不快的。
                    公司汇集了一群有理想、有抱负的员工，为成为一流通信设备制造商，为创造基业长青的“百年老店”而全力以赴、创新进取。
                    为了实现我们的抱负，我们做好一切准备，由此我们坚信，我们将战无不胜。因为抱负，我们的“做强、做大、做久”有了正确方向。
                    激情是关键：创造性解决，关键要靠我们持续的激情：从我做起，从现在做起，从细节做起，充满激情，持续努力，积小胜为大胜，由单品突破到系列第一，务求在世界通信行业拥有我们的一席之地。
                    我们深切知道：空谈无济于事，激情是我们所有行动的动力，结果决定一切。因为持续的激情，我们的“做强、做大、做久”成为必然。</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.block{
    .list_1, .list_2{
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
