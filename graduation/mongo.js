const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', function(err){
  if (err) {
    console.log('*************connect fail*************');
  }else{
    console.log('*************connect succeed*************')
  }
})
