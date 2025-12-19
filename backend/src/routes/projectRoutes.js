const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectCategories
} = require('../controllers/projectController');
const { protect } = require('../middlewares/auth');
const { 
  validateProjectCreate, 
  validateProjectUpdate 
} = require('../validations/projectValidation');
const validateRequest = require('../middlewares/validateRequest');

// Rutas públicas
router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/categories/list', getProjectCategories);
router.get('/:id', getProjectById);

// Rutas protegidas
router.post('/', protect, validateProjectCreate, validateRequest, createProject);
router.put('/:id', protect, validateProjectUpdate, validateRequest, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
