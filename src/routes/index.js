const router = require('express').Router();
const catalogueRouter = require('./catalogue');
const categoryController = require('./category');
const axios = require('axios');
const https = require('https');

const axiosAgent = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

router.use('/catalogue', catalogueRouter);
router.use('/category', categoryController);

module.exports = router;
