const express = require('express');
const router = express.Router();
const administrator = require('../models/administrator');

// 查询所有数据
// router.get('/', (req, res) => {
//   administrator.find({}).then(doc => {
//     if (!doc) {
//       return res.status(404).json('fail...');
//     }
//     res.json(doc);
//   }).catch(err => {
//     res.status(404).json(err);
//   })
// });

// 查询个人信息
router.get('/:id', (req, res) => {
  administrator.findById({_id: req.params.id}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 修改个人信息
router.post('/:id', (req, res) => {
  administrator.findByIdAndUpdate({_id: req.params.id},
     {name: req.body.name, sex: req.body.sex, account: req.body.account,
      password: req.body.password}, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 添加人员
router.post('/s', (req, res) => {
  console.log('now');
  let newData = new addEventListener({
    name: req.body.name,
    sex: req.body.sex,
    account: req.body.account,
    password: req.body.password
  });
  // if (req.body.id) newData._id = req.body.id;
  // if (req.body.name) newData.name = req.body.name;
  // if (req.body.sex) newData.sex = req.body.sex;
  // if (req.body.account) newData.account = req.body.account;
  // if (req.body.password) newData.password = req.body.password;
    newData.save().then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});

router.get('/all', (req, res) => {
  administrator.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
})

module.exports = router;
