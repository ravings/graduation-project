const express = require('express');
const router = express.Router();
const jobs = require('../models/job');

router.get('/', (req, res) => {
  jobs.find({}).then(job => {
    if (!job) {
      return res.status(404).json('fail...');
    }
    res.json(job);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/findById/:id', (req, res) => {
  jobs.findById({_id: req.params.id}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})

router.post('/updateById/:id', (req, res) => {
  jobs.findByIdAndUpdate({_id: req.params.id},{title: req.body.title, number: req.body.number,
   education: req.body.education, professional: req.body.professional, hide: 'true',
   requirements: req.body.requirements}, {new: true}).then(doc => {
     res.json(doc);
   }).catch(err => {
     res.json(err);
   })
})

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
  if (req.body.requirements) {
    jobfile.requirements = req.body.requirements;
  }
  jobs(jobfile).save().then((doc) => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});

router.delete('/deleteById/:id', (req, res) => {
  jobs.findByIdAndRemove({_id: req.params.id})
  .then(job => {
    res.json(job);
  }).catch(err => {
    res.json(err);
  })
})

module.exports = router;
