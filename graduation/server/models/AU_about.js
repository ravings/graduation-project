
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const AU_aboutSchema = new Schema({
  title: String,
  content: String
},
{
  collection: 'AU_about'
});

//导出模板job
module.exports = mongoose.model('AU_about', AU_aboutSchema);
