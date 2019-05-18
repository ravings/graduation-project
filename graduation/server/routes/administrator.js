const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  //  生成token
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
router.get('/findByAccount/:account', (req, res) => {
  administrator.findOne({account: req.params.account}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

// 修改个人信息
router.post('/updateByAccount/:account', (req, res) => {
  administrator.findByIdAndUpdate({account: req.params.account},
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
      res.status(400).json(doc);
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

// 登录验证
router.post('/login', (req, res) => {
  let account = req.body.account;
  let password = req.body.password;
  administrator.findOne({account}).then(doc => {
    if(!doc) {
      return res.status(400).json('account err!');
    }else{
      bcrypt.compare(password, doc.password).then(isMatch => {
        if(isMatch) {
          let content = {account: req.body.account};
          let secretOrPrivateKey = 'theKey';
          // (要生成token的主题信息， 加密的key（密钥）， 过期时间)
          jwt.sign(content, secretOrPrivateKey, {expiresIn: 60*60*60}, (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: `Bearer ${token}`
            })
          })
        }else{
          res.status(400).json('password fail!')
        }
      })
    }
  })
})

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
