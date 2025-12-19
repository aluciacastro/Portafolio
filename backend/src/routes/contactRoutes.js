const express = require('express');
const router = express.Router();
const {
  createContactMessage,
  getContactMessages,
  getContactMessageById,
  updateMessageStatus,
  deleteContactMessage,
  getContactStats
} = require('../controllers/contactController');
const { protect } = require('../middlewares/auth');
const { validateContactMessage } = require('../validations/contactValidation');
const validateRequest = require('../middlewares/validateRequest');
const { contactLimiter } = require('../config/rateLimit');

// Rutas públicas
router.post('/', contactLimiter, validateContactMessage, validateRequest, createContactMessage);

// Rutas protegidas
router.get('/', protect, getContactMessages);
router.get('/stats', protect, getContactStats);
router.get('/:id', protect, getContactMessageById);
router.put('/:id/status', protect, updateMessageStatus);
router.delete('/:id', protect, deleteContactMessage);

module.exports = router;
