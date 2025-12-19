import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsService } from '../services/api';
import ProjectCard from './ProjectCard';
import { Loader2 } from 'lucide-react';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsService.getAll();
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Error al cargar proyectos');
        // Usar datos de ejemplo si falla la API
        setProjects([
          {
            _id: '1',
            title: 'E-Commerce Platform',
            description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
            shortDescription: 'Plataforma de e-commerce moderna y escalable',
            category: 'web',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            status: 'completado',
            featured: true,
            projectUrl: 'https://example.com',
            githubUrl: 'https://github.com'
          },
          {
            _id: '2',
            title: 'Task Management App',
            description: 'Aplicación móvil para gestión de tareas y proyectos con sincronización en tiempo real.',
            shortDescription: 'App de gestión de tareas con sync en tiempo real',
            category: 'mobile',
            technologies: ['React Native', 'Firebase', 'Redux'],
            status: 'completado',
            featured: true
          },
          {
            _id: '3',
            title: 'AI Content Generator',
            description: 'Herramienta de generación de contenido impulsada por IA para marketing y redes sociales.',
            shortDescription: 'Generador de contenido con IA',
            category: 'ai',
            technologies: ['Python', 'OpenAI', 'FastAPI', 'React'],
            status: 'en_progreso',
            featured: false
          },
          {
            _id: '4',
            title: 'Portfolio CMS',
            description: 'Sistema de gestión de contenidos especializado para portfolios creativos.',
            shortDescription: 'CMS para portfolios profesionales',
            category: 'web',
            technologies: ['Next.js', 'Strapi', 'PostgreSQL'],
            status: 'completado',
            featured: false
          },
          {
            _id: '5',
            title: 'Crypto Tracker',
            description: 'Dashboard para seguimiento de criptomonedas con gráficos en tiempo real.',
            shortDescription: 'Tracker de criptomonedas en tiempo real',
            category: 'blockchain',
            technologies: ['Vue.js', 'Web3.js', 'Chart.js'],
            status: 'completado',
            featured: true
          },
          {
            _id: '6',
            title: 'Fitness Tracking Desktop App',
            description: 'Aplicación de escritorio para seguimiento de ejercicios y progreso físico.',
            shortDescription: 'App de fitness para escritorio',
            category: 'desktop',
            technologies: ['Electron', 'React', 'SQLite'],
            status: 'mantenimiento',
            featured: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'desktop', label: 'Desktop' },
    { value: 'ai', label: 'IA' },
    { value: 'blockchain', label: 'Blockchain' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-950">
        <div className="container-custom flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-12 h-12 animate-spin text-primary-600" />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Proyectos</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Mis Trabajos{' '}
            <span className="gradient-text">Recientes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Explora algunos de los proyectos en los que he trabajado,
            desde aplicaciones web hasta soluciones móviles.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {error && !projects.length && (
          <div className="text-center text-red-600 dark:text-red-400 mb-8">
            {error}
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
