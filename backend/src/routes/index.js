const express = require('express');
const router = express.Router();

const companyRoutes = require('./companyRoutes');
const serviceRoutes = require('./serviceRoutes');
const projectRoutes = require('./projectRoutes');
const contactRoutes = require('./contactRoutes');

router.use('/company', companyRoutes);
router.use('/services', serviceRoutes);
router.use('/projects', projectRoutes);
router.use('/contact', contactRoutes);

// Ruta de health check
router.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
