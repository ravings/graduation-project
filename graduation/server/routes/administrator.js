const express = require('express');
const router = express.Router();
const administrator = require('../models/administrator');

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

module.exports = router;
