import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col group"
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-blue-100 dark:from-slate-700 dark:to-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Si la imagen no carga, ocultar y mostrar placeholder
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Placeholder si no hay imagen o falla la carga */}
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ display: project.image ? 'none' : 'flex' }}
        >
          <span className="text-6xl opacity-50">🚀</span>
        </div>
        
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge de destacado */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Destacado
          </div>
        )}

        {/* Badge de categoría */}
        {project.category && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-full">
            {project.category}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 text-sm leading-relaxed">
          {project.description || project.shortDescription}
        </p>

        {/* Cliente (si existe) */}
        {project.client && (
          <div className="mb-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold mr-2">Cliente:</span>
            {project.client}
          </div>
        )}

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
              +{project.technologies.length - 4} más
            </span>
          )}
        </div>

        {/* Highlights (si existen) */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4 text-xs text-gray-600 dark:text-gray-400">
            <ul className="space-y-1">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg"
            >
              <Github className="w-4 h-4" />
              Código
            </motion.a>
          )}
        </div>

        {/* Fechas (si existen) */}
        {(project.startDate || project.endDate) && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="w-3 h-3 mr-1" />
            {project.startDate && new Date(project.startDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
            {project.startDate && project.endDate && ' - '}
            {project.endDate && new Date(project.endDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;