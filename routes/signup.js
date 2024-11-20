var express = require('express');
const {signup} = require('../controller/userController')
var router = express.Router();

/* GET users listing. */
router.post('/', signup);

module.exports = router;
