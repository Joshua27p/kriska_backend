const router = require('express').Router();
const catalogueRouter = require('./catalogue');
const usersRouter = require('./users');
const axios = require('axios');
const https = require('https');

const axiosAgent = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

router.use('/catalogue', catalogueRouter);

module.exports = router;
