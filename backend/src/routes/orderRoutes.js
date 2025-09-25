const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orderController');
const auth = require('../middlewares/authMiddleware');

// Create order (authenticated)
router.post('/', auth.authenticated, ordersCtrl.createOrder);
// Get user's orders
router.get('/user/:userId', auth.authenticated, ordersCtrl.getOrdersByUser);
// Update status (admin/shipping)
router.put('/:id/status', auth.requireRole('shipping_manager'), ordersCtrl.updateOrderStatus);
// Cancel
router.delete('/:id', auth.authenticated, ordersCtrl.cancelOrder);

module.exports = router;
