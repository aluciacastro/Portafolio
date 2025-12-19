import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Laptop, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Code,
      title: 'Desarrollo Backend',
      description: 'Python, Java, Node.js',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Laptop,
      title: 'Desarrollo Frontend',
      description: 'React, HTML, CSS, JavaScript',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      description: 'PostgreSQL, SQL, MongoDB',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Análisis de Datos',
      description: 'Power BI, Excel Avanzado',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const technologies = [
    'Python', 'JavaScript', 'React', 'Node.js', 
    'PostgreSQL', 'Git', 'Power BI',
    'HTML/CSS', 'Java','TypeScript'
  ];

  const stats = [
    { number: '15+', label: 'Proyectos Completados' },
    { number: '9+', label: 'Certificaciones' },
    { number: '2+', label: 'Años de Experiencia' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Desarrolladora apasionada por crear soluciones tecnológicas que mejoran procesos y generan valor
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Historia profesional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Desarrolladora 
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Estudiante de <span className="font-semibold text-primary-600 dark:text-primary-400">
              Ingeniería de Sistemas</span> en la Universidad Popular del Cesar 
              (9no semestre) con sólida formación técnica del SENA y experiencia en 
              administración empresarial.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Durante mi experiencia en <span className="font-semibold text-primary-600 dark:text-primary-400">
              Asesorías y Capacitaciones Masiso S.A.S</span>, desarrollé 
              un sistema web para la gestión automatizada de informes de encuestas de 
              satisfacción para entidades como el SENA e ICBF, <span className="font-semibold text-primary-600 dark:text-primary-400">
              reduciendo el tiempo de generación de reportes de 2 horas a 5 minutos</span>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Mi enfoque combina habilidades técnicas en desarrollo con una comprensión 
              profunda de las necesidades empresariales, permitiéndome crear soluciones 
              tecnológicas efectivas y escalables.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Tecnologías que Domino
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm shadow-md hover:shadow-lg transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Educación y Experiencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* Educación */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              🎓 Formación Académica
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-primary-600 dark:text-primary-400">
                  Ingeniería de Sistemas (9no Semestre)
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Universidad Popular del Cesar • 2021 - Presente
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-primary-600 dark:text-primary-400">
                  Técnico en Sistemas
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  SENA Regional Cesar • Graduada: Agosto 2020
                </p>
              </div>
            </div>
          </div>

          {/* Experiencia */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              💼 Experiencia Profesional
            </h4>
            <div>
              <h5 className="font-semibold text-primary-600 dark:text-primary-400">
                Auxiliar Administrativa
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Asesorías y Capacitaciones Masiso S.A.S
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Julio 2024 - Octubre 2025
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                <li>Desarrollo de sistema web automatizado</li>
                <li>Gestión de informes SENA e ICBF</li>
                <li>Reducción 95% en tiempo de reportes</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;