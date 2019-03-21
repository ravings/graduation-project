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

router.get('/:id', (req, res) => {
  product.findById({_id: req.params.id}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

module.exports = router;
