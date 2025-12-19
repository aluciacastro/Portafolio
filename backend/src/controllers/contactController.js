const ContactMessage = require('../models/ContactMessage');

// @desc    Crear un nuevo mensaje de contacto
// @route   POST /api/contact
// @access  Public
const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    const contactMessage = await ContactMessage.create({
      name,
      email,
      phone,
      subject,
      message,
      ipAddress: req.ip
    });

    res.status(201).json({ 
      message: 'Mensaje enviado exitosamente',
      data: contactMessage 
    });
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al enviar el mensaje',
      error: error.message 
    });
  }
};

// @desc    Obtener todos los mensajes de contacto
// @route   GET /api/contact
// @access  Private (requiere autenticación)
const getContactMessages = async (req, res) => {
  try {
    const { status } = req.query;
    
    const filter = status ? { status } : {};
    
    const messages = await ContactMessage.find(filter)
      .sort({ createdAt: -1 });
    
    res.json(messages);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener mensajes',
      error: error.message 
    });
  }
};

// @desc    Obtener un mensaje por ID
// @route   GET /api/contact/:id
// @access  Private (requiere autenticación)
const getContactMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }

    // Marcar como leído si está nuevo
    if (message.status === 'nuevo') {
      message.status = 'leido';
      await message.save();
    }

    res.json(message);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener el mensaje',
      error: error.message 
    });
  }
};

// @desc    Actualizar estado de un mensaje
// @route   PUT /api/contact/:id/status
// @access  Private (requiere autenticación)
const updateMessageStatus = async (req, res) => {
  try {
    const { status, response } = req.body;
    
    const updateData = { status };
    
    if (status === 'respondido' && response) {
      updateData.response = response;
      updateData.respondedAt = new Date();
    }

    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }

    res.json(message);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al actualizar el estado del mensaje',
      error: error.message 
    });
  }
};

// @desc    Eliminar un mensaje
// @route   DELETE /api/contact/:id
// @access  Private (requiere autenticación)
const deleteContactMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }

    res.json({ message: 'Mensaje eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al eliminar el mensaje',
      error: error.message 
    });
  }
};

// @desc    Obtener estadísticas de mensajes
// @route   GET /api/contact/stats
// @access  Private (requiere autenticación)
const getContactStats = async (req, res) => {
  try {
    const stats = await ContactMessage.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const total = await ContactMessage.countDocuments();

    res.json({
      total,
      byStatus: stats.reduce((acc, stat) => {
        acc[stat._id] = stat.count;
        return acc;
      }, {})
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener estadísticas',
      error: error.message 
    });
  }
};

module.exports = {
  createContactMessage,
  getContactMessages,
  getContactMessageById,
  updateMessageStatus,
  deleteContactMessage,
  getContactStats
};
