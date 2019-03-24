
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const newsSchema = new Schema({
  id: String,
  title: String,
  time: String,
  subtitle: String,
  content: String
},
{
  collection: 'news_company'
});

//导出模板job
module.exports = mongoose.model('news_company', newsSchema);
