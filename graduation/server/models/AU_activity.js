const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const AU_activitySchema = new Schema({
  time: String,
  url: String,
  title: String,
  content: String
},
{
  collection: 'AU_activity'
});

//导出模板job
module.exports = mongoose.model('AU_activity', AU_activitySchema);
