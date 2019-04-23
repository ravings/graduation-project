const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

router.post('/activityUpload', (req, res, next) => {
  let form = new formidable.IncomingForm();
  // 设置编码
  form.encoding = 'utf-8';
  // 保留后缀名
  form.keepExtensions = true;
  // 设置存储路径
  form.uploadDir = '../public/img/activity/';
  // 解析 formData 数据
  form.parse(req, (err, fields, files) => {
    if (err) return next(err);
    let date = (new Date()).getTime();
    // 获取文件路径
    let oldPath = files.file.path;
    // console.log(`oldPath: ${oldPath}`);
    // 上传的图片名
    let imgName = files.file.name;
    // console.log(`imgName: ${imgName}`);
    // 用activity_替换图片名
    let newImgName = imgName.replace(/[^.]+/, `activity_${date}`);
    // console.log(`newImgName: ${newImgName}`)
    // 组合成新路径名
    let newPath = path.join(path.dirname(oldPath), newImgName);
    // console.log(`newPath: ${newPath}`)
    // 图片文件重命名路径
    fs.rename(oldPath, newPath, err => {
      if (err) next(err);
      res.send({imgName: newImgName});
    })
  })
})

router.post('/productUpload/:productType', (req, res, next) => {
  let form = new formidable.IncomingForm();
  // 设置编码
  form.encoding = 'utf-8';
  // 保留后缀名
  form.keepExtensions = true;
  // 设置存储路径
  form.uploadDir = '../public/img/product/';
  // 解析 formData 数据
  form.parse(req, (err, fields, files) => {
    if (err) return next(err);

    // console.log(req);
    // console.log(fields);

    let date = (new Date()).getTime();
    // 获取文件路径
    let oldPath = files.file.path;
    // console.log(`oldPath: ${oldPath}`);
    // 上传的图片名
    let imgName = files.file.name;
    // console.log(`imgName: ${imgName}`);
    // 用activity_替换图片名
    let newImgName = imgName.replace(/[^.]+/, `${req.params.productType}_${date}`);
    // console.log(`newImgName: ${newImgName}`)
    // 组合成新路径名
    let newPath = path.join(path.dirname(oldPath), newImgName);
    // console.log(`newPath: ${newPath}`)
    // 图片文件重命名路径
    fs.rename(oldPath, newPath, err => {
      if (err) next(err);
      res.send({imgName: newImgName});
    })
  })
})

router.post('/tinymceUpload', (req, res, next) => {
  let form = new formidable.IncomingForm();
  // 设置编码
  form.encoding = 'utf-8';
  // 保留后缀名
  form.keepExtensions = true;
  // 设置存储路径
  form.uploadDir = '../public/img/all/';
  // 解析 formData 数据
  form.parse(req, (err, fields, files) => {
    if (err) return next(err);
    let date = (new Date()).getTime();
    // console.log(fields);
    // console.log(files.file);

    // 获取文件路径
    let oldPath = files.file.path;
    // console.log(`oldPath: ${oldPath}`);
    // 上传的图片名
    let imgName = files.file.name;
    // console.log(`imgName: ${imgName}`);
    // 用activity_替换图片名
    let name = imgName.substring(0, imgName.lastIndexOf('.'));
    let newImgName = imgName.replace(/[^.]+/, `${name}_${date}`);
    // console.log(`newImgName: ${newImgName}`)
    // 组合成新路径名
    let newPath = path.join(path.dirname(oldPath), newImgName);
    // console.log(`newPath: ${newPath}`)
    // 图片文件重命名路径
    fs.rename(oldPath, newPath, err => {
      if (err) next(err);
      // res.send({url: newPath});
      res.send({url: `/img/all/${newImgName}`});
    })
  })
})

module.exports = router;
