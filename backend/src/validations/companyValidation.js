const { body } = require('express-validator');

const validateCompanyUpdate = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),
  
  body('slogan')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('El slogan no puede exceder 200 caracteres'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('La descripción no puede exceder 2000 caracteres'),
  
  body('contact.email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Debe ser un email válido'),
  
  body('contact.phone')
    .optional()
    .trim()
    .matches(/^[\d\s\+\-\(\)]+$/)
    .withMessage('El teléfono debe contener solo números y caracteres válidos'),
  
  body('socialMedia.facebook')
    .optional()
    .trim()
    .isURL()
    .withMessage('Debe ser una URL válida'),
  
  body('socialMedia.twitter')
    .optional()
    .trim()
    .isURL()
    .withMessage('Debe ser una URL válida'),
  
  body('socialMedia.instagram')
    .optional()
    .trim()
    .isURL()
    .withMessage('Debe ser una URL válida'),
  
  body('socialMedia.linkedin')
    .optional()
    .trim()
    .isURL()
    .withMessage('Debe ser una URL válida'),
  
  body('foundedYear')
    .optional()
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage('El año de fundación debe ser válido'),
  
  body('teamSize')
    .optional()
    .isInt({ min: 1 })
    .withMessage('El tamaño del equipo debe ser un número positivo')
];

module.exports = {
  validateCompanyUpdate
};
