const express = require('express');
const userController = require('../controllers/userController');
const teacherController = require('../controllers/teacherController');

const router = express.Router();


router.get('/list', userController.getUserList);
router.post('/save', userController.createUser);
router.get('/data/:id', userController.getUser);
router.put('/update/:id', userController.updateUser);
router.delete('delete/:id', userController.deleteUser);

module.exports = router;
