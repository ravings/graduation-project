const express = require('express');
const router = express.Router();
const history = require('../models/history');

router.get('/', (req, res) => {
  history.find({}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/findById/:id', (req, res) => {
  history.findById({_id: req.params.id}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})

// 修改
router.post('/updateById/:id', (req, res) => {
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  history.findByIdAndUpdate({_id: req.params.id},
     {time: `${startTime}-${endTime}` ,content: req.body.content}, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 添加
router.post('/add', (req , res) => {
  // console.log(req.body);
  const theHistory = {};
  if (req.body.startTime && req.body.endTime) {
    theHistory.time = `${req.body.startTime}-${req.body.endTime}`
  }
  if (req.body.content) {
    theHistory.content = req.body.content;
  }
  history(theHistory).save().then((doc) => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});

// 删除
router.delete('/deleteById/:id', (req, res) => {
  history.findByIdAndRemove({_id: req.params.id})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
