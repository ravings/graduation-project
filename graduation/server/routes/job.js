const express = require('express');
const router = express.Router();
const job = require('../models/job');

router.get('/job', (req, res) => {
  job.find({}, (err, job) => {
    if (err) {
      res.json(err);
    }else{
      res.json(job);
    }
  })
});

module.exports = router;
