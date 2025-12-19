import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️',
      link: '#'
    },
    {
      id: 2,
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: '2023',
      icon: '⚛️',
      link: '#'
    },
    {
      id: 3,
      title: 'Google UX Design',
      issuer: 'Google',
      date: '2022',
      icon: '🎨',
      link: '#'
    },
    {
      id: 4,
      title: 'MongoDB Developer',
      issuer: 'MongoDB University',
      date: '2022',
      icon: '🍃',
      link: '#'
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2021',
      icon: '🔥',
      link: '#'
    },
    {
      id: 6,
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: '2023',
      icon: '🤖',
      link: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="badge mb-4">Certificaciones</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title">
            Educación y{' '}
            <span className="gradient-text">Certificaciones</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Comprometido con el aprendizaje continuo y la mejora profesional
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-6 group shine-effect"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className="text-5xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cert.icon}
                </motion.div>
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-1">
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-dark-700">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {cert.date}
                </span>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Formación Académica
          </motion.h3>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">🎓</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">
                    Ingeniería en Sistemas Computacionales
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    Universidad Tecnológica
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    2016 - 2020
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Especialización en Desarrollo de Software y Arquitectura de Sistemas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">📚</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">
                    Bootcamp de Desarrollo Full Stack
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    Coding Academy
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    2020
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Programa intensivo de 6 meses enfocado en MERN Stack y metodologías ágiles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
