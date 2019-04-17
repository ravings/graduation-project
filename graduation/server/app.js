const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//连接数据库
mongoose.connect('mongodb://localhost:27017/test', function(err){
  if (err) {
    console.log('*************connect fail*************');
  }else{
    console.log('*************connect succeed*************')
  }
})

// 解析post请求的数据
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//引入路由文件
const upload = require('./upload/activityUpload'); //  上传图片

const job = require('./routes/job');
const jobScoial = require('./routes/job_social');
const history = require('./routes/history');
const product = require('./routes/product');
const communication = require('./routes/communication');
const news_company = require('./routes/news_company');
const news_industry = require('./routes/news_industry');
const administrator = require('./routes/administrator');
const AU_about = require('./routes/AU_about');
const AU_activity = require('./routes/AU_activity');

//使用路由
app.use('/api/upload', upload); //  上传图片

app.use('/api/job', job);
app.use('/api/jobScoial', jobScoial);
app.use('/api/history', history);
app.use('/api/city', product);
app.use('/api/communication', communication);
app.use('/api/news_company', news_company);
app.use('/api/news_industry', news_industry);
app.use('/api/administrator', administrator);
app.use('/api/AU_about', AU_about);
app.use('/api/AU_activity', AU_activity);

// 设置端口号
// const post = process.env.PORT || 3000;

// 监听3000端口
app.listen(3000, () => {
  console.log('success listen ---> 3000');
})
