const { body } = require('express-validator');

const validateContactMessage = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .withMessage('El nombre solo puede contener letras y espacios'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('El email es requerido')
    .isEmail()
    .normalizeEmail()
    .withMessage('Debe ser un email válido'),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[\d\s\+\-\(\)]+$/)
    .withMessage('El teléfono debe contener solo números y caracteres válidos')
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),
  
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('El asunto es requerido')
    .isLength({ min: 5, max: 200 })
    .withMessage('El asunto debe tener entre 5 y 200 caracteres'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('El mensaje es requerido')
    .isLength({ min: 10, max: 2000 })
    .withMessage('El mensaje debe tener entre 10 y 2000 caracteres')
];

module.exports = {
  validateContactMessage
};
