const express = require ('express');
const router = express.Router();

const EditController = require('../controllers/EditController');


router.get('/:_id', EditController.show);
// router.post('/:_id/save', EditController.save);
router.post('/:_id', EditController.save);


module.exports = router;