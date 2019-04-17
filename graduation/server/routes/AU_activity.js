const express = require('express');
const router = express.Router();
const AU_activity = require('../models/AU_activity');

// 查询所有数据
router.get('/', (req, res) => {
  AU_activity.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/findById/:id', (req, res) => {
  AU_activity.findById({_id: req.params.id}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})


// 修改
router.post('/updateById/:id', (req, res) => {
  AU_activity.findByIdAndUpdate({_id: req.params.id},
     {time: req.body.time, url: req.body.url, title: req.body.title, content: req.body.content}, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 添加
router.post('/add', (req , res) => {
  // console.log(req.body);
  const file = {};
  if (req.body.time) {
    file.time = req.body.time;
  }
  if (req.body.url) {
    file.url = req.body.url;
  }
  if (req.body.title) {
    file.title = req.body.title;
  }
  if (req.body.content) {
    file.content = req.body.content;
  }
  AU_activity(file).save().then((doc) => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});



// 删除
router.delete('/deleteById/:id', (req, res) => {
  AU_activity.findByIdAndRemove({_id: req.params.id})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
