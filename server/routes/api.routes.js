const express = require('express');
const route = express.Router();

const apis = require('../controller/api.controller')
route.get('/', apis.getapi);
route.get('/api/:country', apis.getpais);

module.exports = route;