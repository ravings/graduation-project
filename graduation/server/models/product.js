
const mongoose=require('mongoose');

const Schema = mongoose.Schema;
//通过mongoose的Schema定义模板
const productSchema = new Schema({
  // _id: Object,
  title: String,
  content: String
},
{
  collection: 'product_city'
});

//导出模板job
module.exports = mongoose.model('product', productSchema);