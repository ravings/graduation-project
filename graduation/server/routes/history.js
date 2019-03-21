const express = require('express');
const router = express.Router();
const history = require('../models/history');

router.get('/', (req, res) => {
  history.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

module.exports = router;
