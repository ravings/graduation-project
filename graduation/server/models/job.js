
const mongoose=require('mongoose');

let Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
let jobSchema = new Schema({
  id: string,
  title: string,  //岗位
  number: string, //招聘人数
  education: string,  //学历
  professional: string,  //专业要求
});

//导出模板job
module.exports = mongoose.model('job', jobSchema);
