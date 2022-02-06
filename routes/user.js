const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');
const upload = require('../middleware/upload')


// define a routes
router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/add', upload.array('avatar') , userController.add)
router.put('/:id', userController.update)
router.delete('/:id', userController.destory)

module.exports = router;