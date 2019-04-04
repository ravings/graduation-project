const express = require('express');
const router = express.Router();
const jobSocial = require('../models/job_social');

router.get('/', (req, res) => {
  jobSocial.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/findById/:id', (req, res) => {
  jobSocial.findById({_id: req.params.id}).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})

router.post('/updateById/:id', (req, res) => {
  jobSocial.findByIdAndUpdate({_id: req.params.id},{title: req.body.title, number: req.body.number,
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
  // if (req.body.id) {
  //   jobfile.id = req.body.id;
  // }
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
    jobfile.hide = 'true';
  }
  if (req.body.requirements) {
    jobfile.requirements = req.body.requirements;
  }
  jobSocial(jobfile).save().then((doc) => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
});

router.delete('/deleteById/:id', (req, res) => {
  jobSocial.findByIdAndRemove({_id: req.params.id})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})

module.exports = router;
