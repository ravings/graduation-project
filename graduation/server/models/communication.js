
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const communicationSchema = new Schema({
  img: String,
  title: String,
  content: String
},
{
  collection: 'product_communication'
});

//导出模板job
module.exports = mongoose.model('communication', communicationSchema);
