import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden h-full flex flex-col group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary-100 to-emerald-100 dark:from-primary-900/20 dark:to-emerald-900/20">
        {project.images && project.images.length > 0 ? (
          <motion.img
            src={project.images[0].url}
            alt={project.images[0].alt || project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {project.category === 'web' && '🌐'}
            {project.category === 'mobile' && '📱'}
            {project.category === 'desktop' && '💻'}
            {project.category === 'ai' && '🤖'}
            {project.category === 'blockchain' && '⛓️'}
            {!['web', 'mobile', 'desktop', 'ai', 'blockchain'].includes(project.category) && '💡'}
          </div>
        )}
        
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            <span className={`badge ${
              project.status === 'completado' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                : project.status === 'en_progreso'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
            }`}>
              {project.status === 'completado' && 'Completado'}
              {project.status === 'en_progreso' && 'En Progreso'}
              {project.status === 'mantenimiento' && 'Mantenimiento'}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="badge bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
              ⭐ Destacado
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          {/* Category */}
          {project.category && (
            <span className="badge text-xs mb-3">
              {project.category.toUpperCase()}
            </span>
          )}

          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.shortDescription || project.description}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-dark-700">
          {project.projectUrl && (
            <motion.a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Ver Proyecto
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Código
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
