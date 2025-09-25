const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');

// Admin only create/update/delete
router.post('/', auth.requireRole('admin'), booksCtrl.createBook);
router.get('/', booksCtrl.getBooks);
router.get('/:id', booksCtrl.getBook);
router.put('/:id', auth.requireRole('admin'), booksCtrl.updateBook);
router.delete('/:id', auth.requireRole('admin'), booksCtrl.deleteBook);

module.exports = router;
