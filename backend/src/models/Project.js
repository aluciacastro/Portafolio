const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es requerido'],
    trim: true,
    maxlength: [150, 'El título no puede exceder 150 caracteres']
  },
  description: {
    type: String,
    required: [true, 'La descripción es requerida'],
    trim: true,
    maxlength: [1000, 'La descripción no puede exceder 1000 caracteres']
  },
  shortDescription: {
    type: String,
    trim: true,
    maxlength: [200, 'La descripción corta no puede exceder 200 caracteres']
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'ai', 'blockchain', 'otros'],
    default: 'web'
  },
  client: {
    type: String,
    trim: true,
    maxlength: [100, 'El nombre del cliente no puede exceder 100 caracteres']
  },
  projectUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['en_progreso', 'completado', 'mantenimiento'],
    default: 'completado'
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Índices
projectSchema.index({ featured: -1, order: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ status: 1 });

module.exports = mongoose.model('Project', projectSchema);
