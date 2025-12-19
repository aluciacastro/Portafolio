const Service = require('../models/Service');

// @desc    Obtener todos los servicios activos
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 });
    
    res.json(services);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener servicios',
      error: error.message 
    });
  }
};

// @desc    Obtener un servicio por ID
// @route   GET /api/services/:id
// @access  Public
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener el servicio',
      error: error.message 
    });
  }
};

// @desc    Crear un nuevo servicio
// @route   POST /api/services
// @access  Private (requiere autenticación)
const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al crear el servicio',
      error: error.message 
    });
  }
};

// @desc    Actualizar un servicio
// @route   PUT /api/services/:id
// @access  Private (requiere autenticación)
const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true, 
        runValidators: true 
      }
    );

    if (!service) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.json(service);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al actualizar el servicio',
      error: error.message 
    });
  }
};

// @desc    Eliminar un servicio (soft delete)
// @route   DELETE /api/services/:id
// @access  Private (requiere autenticación)
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.json({ message: 'Servicio eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al eliminar el servicio',
      error: error.message 
    });
  }
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService
};
