import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-primary-100/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Saludo animado */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
    
          </motion.div>

          {/* Nombre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-24 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
   
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500 dark:from-primary-400 dark:to-blue-400">
              
              Adriana Lucia Castro Carreño
            </span>
          </motion.h1>

          {/* Título profesional */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          >
            Ingeniera en Sistemas 
          </motion.h2>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Estudiante de Ingeniería de Sistemas (10mo semestre) especializada en desarrollo web 
            con <span className="font-semibold text-primary-600 dark:text-primary-400">Python</span>, {' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">React</span> y bases de datos. 
            Apasionada por crear soluciones tecnológicas integrando APIs, manejando bases de datos relacionales y desarrollando interfaces funcionales que optimizen procesos empresariales . 
          </motion.p>

          {/* Enlaces sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://github.com/aluciacastro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/adriana-lucia-castro-carreño-453a44399/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="mailto:lucia302128@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Ver Proyectos
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
            >
              Contactar
            </motion.button>
          </motion.div>

          {/* Estadísticas rápidas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                15+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Proyectos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                9+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Certificaciones
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                2+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Años de Experiencia
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;