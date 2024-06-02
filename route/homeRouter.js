const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const AddController = require('../controllers/AddController');
const DelController = require('../controllers/DelController');

router.get('/', HomeController.renderhomeview);
router.get('/add', AddController.renderaddview);
router.post('/save', AddController.save);
router.delete('/del/:_id', DelController.del);

module.exports = router;
