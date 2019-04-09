const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const administrator = require('../models/administrator');

// 查询所有数据
router.get('/', (req, res) => {
  administrator.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

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
router.post('/updateById/:id', (req, res) => {
  administrator.findByIdAndUpdate({_id: req.params.id},
     {name: req.body.name, sex: req.body.sex, account: req.body.account,
      password: req.body.password}, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 添加人员
router.post('/add', (req, res) => {
  // console.log('now');
  let newData = new administrator({
    name: req.body.name,
    sex: req.body.sex,
    account: req.body.account,
    password: req.body.password
  });
  administrator.findOne({account: req.body.account}).then(doc => {
    if(doc) {
      res.status(400).json('doc');
    }else{
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newData.password, salt, (err, hash) => {
          if(err) throw err;
          // 使用hash覆盖明文密码
          newData.password = hash;
          newData.save().then(doc => {
            res.json(doc);
          }).catch(err => {
            res.json(err);
          })
        })
      })
    }
  })
});

// 删除管理员
router.delete('/deleteById/:id', (req, res) => {
  administrator.findByIdAndRemove({_id: req.params.id})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
