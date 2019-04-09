const express = require('express');
const router = express.Router();
const news_company = require('../models/news_company');

router.get('/', (req, res) => {
  news_company.find({}).then(doc => {
    if (!doc) {
      return res.status(404).json('fail...');
    }
    res.json(doc);
  }).catch(err => {
    res.status(404).json(err);
  })
});

router.get('/findByMore/:title', (req, res) => {
  let keyTitle = req.params.title;
  let _filter = {
    $or: [
      {
        title: {$regex: keyTitle}
      },
      {
        subtitle: {$regex: keyTitle}
      }
    ]
  }
  news_company.find(_filter).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})

router.get('/findById/:id', (req, res) => {
  news_company.findById({_id: req.params.id}).then(doc => {
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
    subtitle: req.body.subtitle,
    time: req.body.time,
    content: req.body.content
  }
  news_company.findByIdAndUpdate({_id: req.params.id}, data, {new: true})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

router.post('/add', (req, res) => {
  let data = new news_company({
    title: req.body.title,
    subtitle: req.body.subtitle,
    time: req.body.time,
    content: req.body.content
  })
  data.save().then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
  })
})

router.delete('/deleteById/:id', (req, res) => {
  news_company.findByIdAndRemove({_id: req.params.id})
  .then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
})

module.exports = router;
