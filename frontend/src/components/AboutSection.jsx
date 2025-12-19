import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Code,
      title: 'Desarrollo Full Stack',
      description: 'Experiencia en React, Node.js, y tecnologías modernas de desarrollo web.',
    },
    {
      icon: Palette,
      title: 'Diseño UI/UX',
      description: 'Creación de interfaces intuitivas y atractivas centradas en el usuario.',
    },
    {
      icon: Zap,
      title: 'Rendimiento',
      description: 'Optimización de aplicaciones para máxima velocidad y eficiencia.',
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboración efectiva en equipos ágiles y multidisciplinarios.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '30+', label: 'Clientes Satisfechos' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '15+', label: 'Tecnologías Dominadas' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="badge mb-4">Sobre Mí</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title">
            Transformando Ideas en{' '}
            <span className="gradient-text">Soluciones Digitales</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Soy un desarrollador apasionado por crear experiencias web excepcionales
            que combinan diseño elegante con código limpio y eficiente.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-6 text-center card-hover"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Mi Historia</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Mi pasión por la tecnología comenzó hace más de 5 años, cuando escribí mi
                primera línea de código. Desde entonces, he estado en una constante búsqueda
                de aprendizaje y perfeccionamiento de mis habilidades.
              </p>
              <p>
                Me especializo en el desarrollo de aplicaciones web modernas utilizando las
                últimas tecnologías del ecosistema JavaScript. Mi enfoque está en crear
                soluciones que no solo funcionen bien, sino que también brinden una
                experiencia excepcional al usuario.
              </p>
              <p>
                Cuando no estoy programando, me gusta compartir conocimientos con la comunidad,
                contribuir a proyectos open source, y mantenerme actualizado con las últimas
                tendencias en desarrollo web.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Next.js', 'Express', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="badge"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
