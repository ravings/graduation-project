
const mongoose=require('mongoose');

let Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
let jobSchema = new Schema({
  id: String,
  title: String,  //岗位
  number: String, //招聘人数
  education: String,  //学历
  professional: String,  //专业要求
});

//导出模板job
module.exports = mongoose.model('job', jobSchema);
