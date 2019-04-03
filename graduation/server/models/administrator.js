
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const administratorSchema = new Schema({
  // id: String,
  name: String,
  sex: String,
  account: String,
  password: String
},
{
  collection: 'administrator'
});

//导出模板job
module.exports = mongoose.model('administrator', administratorSchema);
