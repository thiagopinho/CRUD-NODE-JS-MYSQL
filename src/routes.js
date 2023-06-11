const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');

router.get('/cars', CarController.getAll);
router.get('/cars/:id', CarController.getByID);
router.post('/car', CarController.insert);
router.put('/car/:id', CarController.update);
router.delete('/car/:id', CarController.delete);

module.exports = router;  