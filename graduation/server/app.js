const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const proxy = require('../src/proxy');

//连接数据库
mongoose.connect('mongodb://localhost:27017/test', function(err){
  if (err) {
    console.log('*************connect fail*************');
  }else{
    console.log('*************connect succeed*************')
  }
})

//引入job文件
const job = require('./routes/job');
//使用路由
app.use('/job', job);

// const post = process.env.PORT || 3000;

// 监听3000端口
app.listen(3000, () => {
  console.log('success listen ---> 3000');
})
