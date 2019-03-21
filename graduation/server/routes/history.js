const express = require('express');
const router = express.Router();
const product = require('../models/history');

router.get('/', (req, res) => {
  product.find({}).then(doc => {
    // console.log(req.body);
    if (!doc) {
      return res.status(404).json('fail...');
    }
    // console.log(res.json(job));
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

module.exports = router;
