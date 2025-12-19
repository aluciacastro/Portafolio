const express = require('express');
const router = express.Router();
const {
  getCompanyInfo,
  updateCompanyInfo,
  getCompanyStats
} = require('../controllers/companyController');
const { protect } = require('../middlewares/auth');
const { validateCompanyUpdate } = require('../validations/companyValidation');
const validateRequest = require('../middlewares/validateRequest');

// Rutas públicas
router.get('/', getCompanyInfo);
router.get('/stats', getCompanyStats);

// Rutas protegidas
router.put('/', protect, validateCompanyUpdate, validateRequest, updateCompanyInfo);

module.exports = router;
