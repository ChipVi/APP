// GOI HAM ROUTER TU EXPRESS
const express = require ('express');
const router = express.Router();

const CakeController = require('../controllers/CakeController');

router.get('/:_id', CakeController.renderCakeDetails);
// dynamic path with changing param, so we add :slug
// call cakecontroller, call funtion show of cakecontroller


module.exports = router;