const {handleGenerateShortenedUrl} = require('../controller/url')
const express = require('express')

const router = express.Router();

router.post('/', handleGenerateShortenedUrl)


module.exports = router;
