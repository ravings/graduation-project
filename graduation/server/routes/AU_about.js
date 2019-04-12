const express = require('express');
const router = express.Router();
const AU_about = require('../models/AU_about');

// 查询所有数据
router.get('/', (req, res) => {
  AU_about.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 修改
router.post('/update/:id', (req, res) => {
  AU_about.findByIdAndUpdate({_id: req.params.id},
     {content: req.body.content}, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 添加
router.post('/add', (req , res) => {
  // console.log(req.body);
  const jobfile = {};

  if (req.body.content) {
    jobfile.content = req.body.content;
  }
  AU_about(jobfile).save().then((doc) => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});



// 删除
router.delete('/deleteById/:id', (req, res) => {
  AU_about.findByIdAndRemove({_id: req.params.id})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
