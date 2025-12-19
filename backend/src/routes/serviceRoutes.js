const express = require('express');
const router = express.Router();
const {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} = require('../controllers/serviceController');
const { protect } = require('../middlewares/auth');
const { 
  validateServiceCreate, 
  validateServiceUpdate 
} = require('../validations/serviceValidation');
const validateRequest = require('../middlewares/validateRequest');

// Rutas públicas
router.get('/', getServices);
router.get('/:id', getServiceById);

// Rutas protegidas
router.post('/', protect, validateServiceCreate, validateRequest, createService);
router.put('/:id', protect, validateServiceUpdate, validateRequest, updateService);
router.delete('/:id', protect, deleteService);

module.exports = router;
