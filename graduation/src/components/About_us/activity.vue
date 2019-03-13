<template>
    <div class="block">
        <div class="title">
            <h2>高效工作，健康生活</h2>
            <p>这八个字是高科人的精神理念。工作起来干劲十足，全力以赴。生活起来动感十足，健康多彩。持久无限的激情，始终如一的责任，远大美丽的抱负，创造性解决，开拓性进取，创辉煌事业，赢幸福人生。</p>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item, index) in imgs" :key="index">
                    <a :href="item.url"><img :src="item.src" alt=""></a>
                    <p>美食、电影节</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgs: [{
                src: require('../../assets/activity_1.jpg'),
                url: ''
            },
            {
                src: require('../../assets/activity_1.jpg'),
                url: ''
            },
            {
                src: require('../../assets/activity_1.jpg'),
                url: ''
            },
            {
                src: require('../../assets/activity_1.jpg'),
                url: ''
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.title{
    p{
        margin-top: 20px;
        font-size: 14px;
        color: rgb(102, 102, 102);
        line-height: 2;
    }
}
.list{
    li{
        list-style: none;
        float: left;
        margin: 15px 10px;
        p{
            font-size: 18px;
            padding: 5px 0;
            text-align: center;
            background-color: rgba(102, 102, 102, 0.5);
            &:hover{
                background-color:  rgba(221, 64, 18, 1);
                cursor: pointer;
                color: #fff;
            }
        }
    }
}
</style>
