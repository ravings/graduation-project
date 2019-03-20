
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const jobSchema = new Schema({
  // _id: Object,
  id: String,
  title: String,  //岗位
  number: String, //招聘人数
  education: String,  //学历
  professional: String,  //专业要求
  hide: String
},
{
  collation: 'job'
});

//导出模板job
module.exports = mongoose.model('job', jobSchema);
