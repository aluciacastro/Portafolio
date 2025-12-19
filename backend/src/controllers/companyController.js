const CompanyInfo = require('../models/CompanyInfo');

// @desc    Obtener información de la empresa
// @route   GET /api/company
// @access  Public
const getCompanyInfo = async (req, res) => {
  try {
    const companyInfo = await CompanyInfo.getSingleton();
    res.json(companyInfo);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener información de la empresa',
      error: error.message 
    });
  }
};

// @desc    Actualizar información de la empresa
// @route   PUT /api/company
// @access  Private (requiere autenticación)
const updateCompanyInfo = async (req, res) => {
  try {
    const companyInfo = await CompanyInfo.getSingleton();
    
    const updatedInfo = await CompanyInfo.findByIdAndUpdate(
      companyInfo._id,
      req.body,
      { 
        new: true, 
        runValidators: true 
      }
    );

    res.json(updatedInfo);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al actualizar información de la empresa',
      error: error.message 
    });
  }
};

// @desc    Obtener estadísticas de la empresa
// @route   GET /api/company/stats
// @access  Public
const getCompanyStats = async (req, res) => {
  try {
    const companyInfo = await CompanyInfo.getSingleton();
    res.json(companyInfo.stats || {});
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener estadísticas',
      error: error.message 
    });
  }
};

module.exports = {
  getCompanyInfo,
  updateCompanyInfo,
  getCompanyStats
};
