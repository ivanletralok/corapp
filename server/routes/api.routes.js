const express = require('express');
const route = express.Router();

const apis = require('../controller/api.controller')

route.get('/api', apis.getapi);

route.get('/api/:country', apis.getpais);

module.exports = route;