const Project = require('../models/Project');

// @desc    Obtener todos los proyectos activos
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const { category, status, featured } = req.query;
    
    const filter = { isActive: true };
    
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (featured !== undefined) filter.featured = featured === 'true';

    const projects = await Project.find(filter)
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.json(projects);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener proyectos',
      error: error.message 
    });
  }
};

// @desc    Obtener un proyecto por ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project || !project.isActive) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener el proyecto',
      error: error.message 
    });
  }
};

// @desc    Obtener proyectos destacados
// @route   GET /api/projects/featured
// @access  Public
const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ 
      isActive: true, 
      featured: true 
    })
    .sort({ order: 1, createdAt: -1 })
    .limit(6);
    
    res.json(projects);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener proyectos destacados',
      error: error.message 
    });
  }
};

// @desc    Crear un nuevo proyecto
// @route   POST /api/projects
// @access  Private (requiere autenticación)
const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al crear el proyecto',
      error: error.message 
    });
  }
};

// @desc    Actualizar un proyecto
// @route   PUT /api/projects/:id
// @access  Private (requiere autenticación)
const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true, 
        runValidators: true 
      }
    );

    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al actualizar el proyecto',
      error: error.message 
    });
  }
};

// @desc    Eliminar un proyecto (soft delete)
// @route   DELETE /api/projects/:id
// @access  Private (requiere autenticación)
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    res.json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al eliminar el proyecto',
      error: error.message 
    });
  }
};

// @desc    Obtener categorías de proyectos
// @route   GET /api/projects/categories/list
// @access  Public
const getProjectCategories = async (req, res) => {
  try {
    const categories = await Project.distinct('category', { isActive: true });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener categorías',
      error: error.message 
    });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectCategories
};
