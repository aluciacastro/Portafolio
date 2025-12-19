const { body } = require('express-validator');

const validateServiceCreate = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('El título es requerido')
    .isLength({ min: 3, max: 100 })
    .withMessage('El título debe tener entre 3 y 100 caracteres'),
  
  body('description')
    .trim()
    .notEmpty()
    .withMessage('La descripción es requerida')
    .isLength({ min: 10, max: 500 })
    .withMessage('La descripción debe tener entre 10 y 500 caracteres'),
  
  body('icon')
    .trim()
    .notEmpty()
    .withMessage('El icono es requerido'),
  
  body('features')
    .optional()
    .isArray()
    .withMessage('Las características deben ser un array'),
  
  body('features.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Cada característica debe tener entre 1 y 200 caracteres'),
  
  body('order')
    .optional()
    .isInt({ min: 0 })
    .withMessage('El orden debe ser un número entero no negativo'),
  
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive debe ser un valor booleano')
];

const validateServiceUpdate = [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('El título debe tener entre 3 y 100 caracteres'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('La descripción debe tener entre 10 y 500 caracteres'),
  
  body('icon')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El icono no puede estar vacío'),
  
  body('features')
    .optional()
    .isArray()
    .withMessage('Las características deben ser un array'),
  
  body('features.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Cada característica debe tener entre 1 y 200 caracteres'),
  
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
  validateServiceCreate,
  validateServiceUpdate
};
