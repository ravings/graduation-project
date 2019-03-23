const express = require('express');
const router = express.Router();
const communication = require('../models/communication');

router.get('/', (req, res) => {
  communication.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/:id', (req, res) => {
  communication.findById({_id: req.params.id}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

module.exports = router;
