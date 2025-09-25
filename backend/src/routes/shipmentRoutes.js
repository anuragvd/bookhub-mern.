const express = require('express');
const router = express.Router();
const shipmentsCtrl = require('../controllers/shipmentController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth.requireRole('shipping_manager'), shipmentsCtrl.createShipment);
router.get('/', auth.authenticated, shipmentsCtrl.getShipments);
router.put('/:id', auth.requireRole('shipping_manager'), shipmentsCtrl.updateShipmentStatus);
router.delete('/:id', auth.requireRole('shipping_manager'), shipmentsCtrl.deleteShipment);

module.exports = router;
