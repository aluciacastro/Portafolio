import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import api from '../services/api';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Proyectos reales de Adriana con los nombres de archivo exactos
  const exampleProjects = [
    {
      _id: '1',
      title: 'EnergyAnalytics',
      slug: 'energy-analytics',
      shortDescription: 'Sistema de análisis energético con Machine Learning',
      description: 'Proyecto desarrollado para Hackaton 2025. Sistema completo que incluye funcionalidades web y machine learning con integración entre frontend y backend.',
      longDescription: 'Sistema de análisis energético que combina visualización de datos en tiempo real con modelos de machine learning para predicción y optimización. Desarrollado con arquitectura moderna de microservicios usando TypeScript en el frontend y Python para los modelos de ML.',
      image: '/images/projects/energy-analytics.jpg',
      technologies: ['TypeScript', 'Python', 'React', 'Machine Learning', 'TensorFlow', 'FastAPI'],
      category: 'Machine Learning',
      featured: true,
      status: 'completed',
      demoUrl: 'https://energy-analitics-2025.vercel.app/',
      githubUrl: 'https://github.com/ynavier/Hackaton_2025',
      startDate: '2025-01-01',
      endDate: '2025-01-15',
      highlights: [
        'Análisis predictivo con Machine Learning',
        'Visualización interactiva de datos energéticos',
        'Arquitectura de microservicios',
        'Integración TypeScript-Python robusta'
      ]
    },
    {
      _id: '2',
      title: 'Generador de Informes ICBF',
      slug: 'generador-informes-icbf',
      shortDescription: 'Sistema automatizado de generación de informes',
      description: 'Sistema automatizado para la generación de informes profesionales de encuestas de satisfacción para el Instituto Colombiano de Bienestar Familiar (ICBF).',
      longDescription: 'Herramienta web que automatiza completamente el proceso de generación de informes profesionales. Incluye análisis inteligente de datos, generación automática de gráficas profesionales y formateo institucional según normativas ICBF. Reduce el tiempo de creación de informes de 2 horas a 5 minutos.',
      image: '/images/projects/generador-icbf.jpg',
      technologies: ['Python', 'React', 'Node.js', 'Chart.js', 'MongoDB', 'Express'],
      category: 'Web',
      featured: true,
      status: 'completed',
      githubUrl: 'https://github.com/aluciacastro/GENERADOR-DE-INFORMES',
      startDate: '2024-07-01',
      endDate: '2024-10-30',
      highlights: [
        'Análisis inteligente automático de encuestas',
        'Generación de gráficas profesionales',
        'Formato institucional ICBF (Calibri 11pt)',
        'Reducción de tiempo de 2h a 5min',
        'Interfaz web moderna y responsive'
      ],
      client: 'Asesorías y Capacitaciones Masiso S.A.S'
    },
    {
      _id: '3',
      title: 'FinancyBank',
      slug: 'financy-bank',
      shortDescription: 'Aplicación móvil de gestión financiera personal',
      description: 'Aplicación móvil para gestión financiera personal y bancaria desarrollada en Flutter/Dart con interfaz moderna.',
      longDescription: 'Aplicación completa de gestión financiera que permite controlar cuentas bancarias, establecer presupuestos, visualizar gastos con gráficos interactivos y recibir notificaciones de movimientos importantes. Incluye sincronización offline y diseño material moderno.',
      image: null, // No hay imagen para este proyecto
      technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Provider'],
      category: 'Mobile',
      featured: true,
      status: 'completed',
      githubUrl: 'https://github.com/aluciacastro/FinancyBank',
      startDate: '2024-09-01',
      endDate: '2024-11-30',
      highlights: [
        'Gestión completa de finanzas personales',
        'Presupuestos y categorización automática',
        'Gráficos interactivos de gastos',
        'Sincronización offline-first'
      ]
    }
  ];

  const fetchProjects = useCallback(async () => {
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
      setFilteredProjects(response.data);
      setLoading(false);
    } catch (err) {
      console.log('Using example projects');
      setProjects(exampleProjects);
      setFilteredProjects(exampleProjects);
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'Web', name: 'Web' },
    { id: 'Mobile', name: 'Mobile' },
    { id: 'Machine Learning', name: 'Machine Learning' },
    { id: 'Automatización', name: 'Automatización' },
  ];

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando proyectos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas que optimizan procesos y generan valor real
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => filterProjects(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 shadow-md'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No hay proyectos en esta categoría
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Hablemos de tu idea
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;