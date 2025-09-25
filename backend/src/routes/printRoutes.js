const express = require('express');
const router = express.Router();
const printCtrl = require('../controllers/printController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth.requireRole('admin'), printCtrl.createBatch);
router.get('/book/:bookId', auth.authenticated, printCtrl.getBatchesForBook);
router.put('/:id', auth.requireRole('admin'), printCtrl.updateBatch);
router.delete('/:id', auth.requireRole('admin'), printCtrl.deleteBatch);

module.exports = router;
