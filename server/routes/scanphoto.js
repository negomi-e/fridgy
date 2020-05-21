const express = require('express');
const router = express.Router();
const fs = require('fs');
const util = require('util');
const mime = require('mime');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });
require('dotenv').config()

const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/* READ PHOTO. */

router.post('/', upload.single('image'), async function (req, res, next) {
  // READ OBJECT TYPE
  const filename = req.file.path
  const [labelresult] = await client.labelDetection(filename);
  const labels = labelresult.labelAnnotations;

  labels.forEach(label => console.log('label descrition', label.description));
  const labelArray = labels.map(label => label.description)


  //READ EXPIRY DATE
  const [textresult] = await client.textDetection(filename);
  const detections = textresult.textAnnotations;
  //FILTER RESULTS
  const regex = /\d/;
  const regex2 = /[%]/;
  const str = detections.map(word => word.description)
  str.shift()
  const dates = str.filter(string => (
    regex.test(string)
      && !regex2.test(string)
      && string.length > 3
      && new Date(string) !== "Invalid Date"
      && !isNaN(new Date(string)
      ) ? true : false))


  res.json({ labels: labelArray, dates: dates })
})


module.exports = router;