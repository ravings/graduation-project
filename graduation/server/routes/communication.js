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

router.get('/findById/:id', (req, res) => {
  communication.findById({_id: req.params.id}).then(doc => {
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
  communication.findByIdAndUpdate({_id: req.params.id}, data, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

router.post('/add', (req, res) => {
  let data = new communication({
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
  communication.findByIdAndRemove({_id: req.params.id}).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
