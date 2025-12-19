const { body } = require('express-validator');

const validateProjectCreate = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('El título es requerido')
    .isLength({ min: 3, max: 150 })
    .withMessage('El título debe tener entre 3 y 150 caracteres'),
  
  body('description')
    .trim()
    .notEmpty()
    .withMessage('La descripción es requerida')
    .isLength({ min: 20, max: 1000 })
    .withMessage('La descripción debe tener entre 20 y 1000 caracteres'),
  
  body('shortDescription')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('La descripción corta no puede exceder 200 caracteres'),
  
  body('images')
    .optional()
    .isArray()
    .withMessage('Las imágenes deben ser un array'),
  
  body('images.*.url')
    .optional()
    .trim()
    .isURL()
    .withMessage('Cada imagen debe tener una URL válida'),
  
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Las tecnologías deben ser un array'),
  
  body('technologies.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Cada tecnología debe tener entre 1 y 50 caracteres'),
  
  body('category')
    .optional()
    .isIn(['web', 'mobile', 'desktop', 'ai', 'blockchain', 'otros'])
    .withMessage('Categoría no válida'),
  
  body('client')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('El nombre del cliente no puede exceder 100 caracteres'),
  
  body('projectUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('La URL del proyecto debe ser válida'),
  
  body('githubUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('La URL de GitHub debe ser válida'),
  
  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('La fecha de inicio debe ser válida'),
  
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('La fecha de finalización debe ser válida'),
  
  body('status')
    .optional()
    .isIn(['en_progreso', 'completado', 'mantenimiento'])
    .withMessage('Estado no válido'),
  
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('featured debe ser un valor booleano'),
  
  body('order')
    .optional()
    .isInt({ min: 0 })
    .withMessage('El orden debe ser un número entero no negativo'),
  
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive debe ser un valor booleano')
];

const validateProjectUpdate = [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 150 })
    .withMessage('El título debe tener entre 3 y 150 caracteres'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ min: 20, max: 1000 })
    .withMessage('La descripción debe tener entre 20 y 1000 caracteres'),
  
  body('shortDescription')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('La descripción corta no puede exceder 200 caracteres'),
  
  body('images')
    .optional()
    .isArray()
    .withMessage('Las imágenes deben ser un array'),
  
  body('images.*.url')
    .optional()
    .trim()
    .isURL()
    .withMessage('Cada imagen debe tener una URL válida'),
  
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Las tecnologías deben ser un array'),
  
  body('technologies.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Cada tecnología debe tener entre 1 y 50 caracteres'),
  
  body('category')
    .optional()
    .isIn(['web', 'mobile', 'desktop', 'ai', 'blockchain', 'otros'])
    .withMessage('Categoría no válida'),
  
  body('client')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('El nombre del cliente no puede exceder 100 caracteres'),
  
  body('projectUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('La URL del proyecto debe ser válida'),
  
  body('githubUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('La URL de GitHub debe ser válida'),
  
  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('La fecha de inicio debe ser válida'),
  
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('La fecha de finalización debe ser válida'),
  
  body('status')
    .optional()
    .isIn(['en_progreso', 'completado', 'mantenimiento'])
    .withMessage('Estado no válido'),
  
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('featured debe ser un valor booleano'),
  
  body('order')
    .optional()
    .isInt({ min: 0 })
    .withMessage('El orden debe ser un número entero no negativo'),
  
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive debe ser un valor booleano')
];

module.exports = {
  validateProjectCreate,
  validateProjectUpdate
};
