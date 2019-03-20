const express = require('express');
const router = express.Router();
const job = require('../models/job');

router.get('/', (req, res) => {
  job.find({}).then(job => {
    // console.log(req.body);
    if (!job) {
      return res.status(404).json('fail...');
    }
    res.json(job);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.post('/add', (req , res) => {
  // console.log(req.body);
  const jobfile = {};
  if (req.body.id) {
    jobfile.id = req.body.id;
  }
  if (req.body.title) {
    jobfile.title = req.body.title;
  }
  if (req.body.number) {
    jobfile.number = req.body.number;
  }
  if (req.body.education) {
    jobfile.education = req.body.education;
  }
  if (req.body.professional) {
    jobfile.professional = req.body.professional;
  }
  if (req.body.hide) {
    jobfile.hide = req.body.hide;
  }
  new job(jobfile).save().then((doc) => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});

router.delete('/delete', (req, res) => {
  // console.log(req.body);
  job.remove({}).then(job => {
    job.save().then(job => {
      res.json(job);
    }).catch(err => {
      res.json(err);
    })
  })
})

module.exports = router;
