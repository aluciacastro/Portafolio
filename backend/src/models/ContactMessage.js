const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'El teléfono no puede exceder 20 caracteres']
  },
  subject: {
    type: String,
    required: [true, 'El asunto es requerido'],
    trim: true,
    maxlength: [200, 'El asunto no puede exceder 200 caracteres']
  },
  message: {
    type: String,
    required: [true, 'El mensaje es requerido'],
    trim: true,
    maxlength: [2000, 'El mensaje no puede exceder 2000 caracteres']
  },
  status: {
    type: String,
    enum: ['nuevo', 'leido', 'respondido', 'archivado'],
    default: 'nuevo'
  },
  response: {
    type: String,
    trim: true
  },
  respondedAt: {
    type: Date
  },
  ipAddress: {
    type: String
  }
}, {
  timestamps: true
});

// Índices
contactMessageSchema.index({ status: 1, createdAt: -1 });
contactMessageSchema.index({ email: 1 });

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
