const express = require('express');
const {response} = require("express");
const router = express.Router();

router.get('/', (request, response) => {
   response.render('index', {title : 'Title Home'});
});

module.exports = router;
