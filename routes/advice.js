const express = require('express');
const router = express.Router();

const { getAdvices } = require('../contollers/adviceController.js');

router.route('/').get(getAdvices);


module.exports = router;