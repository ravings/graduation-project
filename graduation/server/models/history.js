
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const historySchema = new Schema({
  time: String,
  title: String,
  content: String
},
{
  collection: 'history'
});

//导出模板job
module.exports = mongoose.model('history', historySchema);
