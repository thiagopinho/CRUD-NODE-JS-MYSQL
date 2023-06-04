const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');

router.get('/cars', CarController.getAll);
router.get('/cars/:id', CarController.getByID);

module.exports = router;  