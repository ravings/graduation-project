const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const proxy = require('../src/proxy');

//连接数据库
mongoose.connect('mongodb://localhost:27017/test', function(err){
  if (err) {
    console.log('*************connect fail*************');
  }else{
    console.log('*************connect succeed*************')
  }
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//引入job文件
const job = require('./routes/job');
const history = require('./routes/history');
const product = require('./routes/product');
const communication = require('./routes/communication');
const news_company = require('./routes/news_company');
const news_industry = require('./routes/news_industry');

//使用路由
app.use('/api/job', job);
app.use('/api/history', history);
app.use('/api/city', product);
app.use('/api/communication', communication);
app.use('/api/news_company', news_company);
app.use('/api/news_industry', news_industry);

// const post = process.env.PORT || 3000;

// 监听3000端口
app.listen(3000, () => {
  console.log('success listen ---> 3000');
})
