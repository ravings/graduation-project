const express = require('express');
const router = express.Router();
const product = require('../models/product');

router.get('/', (req, res) => {
  product.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/findById/:id', (req, res) => {
  product.findById({_id: req.params.id}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.post('/updateById/:id', (req, res) => {
  let data = {
    title: req.body.title,
    content: req.body.content
  };
  product.findByIdAndUpdate({_id: req.params.id}, data, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

router.post('/add', (req, res) => {
  let data = new product({
    title: req.body.title,
    content: req.body.content
  });
  data.save().then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

router.delete('/deleteById/:id', (req, res) => {
  product.findByIdAndRemove({_id: req.params.id}).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
