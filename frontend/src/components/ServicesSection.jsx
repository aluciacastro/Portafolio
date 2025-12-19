import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Palette, ArrowRight, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code2,
      title: 'Desarrollo Web Full Stack',
      description: 'Aplicaciones web completas y escalables con las tecnologías más modernas del mercado.',
      features: [
        'React, Vue o Next.js',
        'Responsive & Mobile-first',
        'Integración de APIs',
        'Dashboard administrativos'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      accent: 'from-cyan-500 via-blue-500 to-purple-600',
      bgGradient: 'from-cyan-50/50 to-blue-50/50',
      darkBgGradient: 'from-cyan-950/20 to-blue-950/20',
      highlight: '#06b6d4',
      price: 'Desde $500.000 COP'
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      description: 'Arquitecturas robustas y APIs RESTful para potenciar tus aplicaciones con bases de datos escalables.',
      features: [
        'APIs RESTful profesionales',
        'Bases de datos SQL/NoSQL',
        'Autenticación segura (JWT)',
        'Documentación Swagger'
      ],
      technologies: ['Python', 'Node.js', 'PostgreSQL', 'Express'],
      accent: 'from-emerald-500 via-green-500 to-teal-600',
      bgGradient: 'from-emerald-50/50 to-green-50/50',
      darkBgGradient: 'from-emerald-950/20 to-green-950/20',
      highlight: '#10b981',
      price: 'Desde $400.000 COP'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas y atractivas que convierten visitantes en usuarios felices y recurrentes.',
      features: [
        'Diseño de interfaces modernas',
        'Prototipos interactivos',
        'Experiencia de usuario optimizada',
        'Design systems personalizados'
      ],
      technologies: ['Figma', 'Tailwind', 'Framer Motion', 'CSS'],
      accent: 'from-pink-500 via-rose-500 to-orange-500',
      bgGradient: 'from-pink-50/50 to-orange-50/50',
      darkBgGradient: 'from-pink-950/20 to-orange-950/20',
      highlight: '#ec4899',
      price: 'Desde $300.000 COP'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-700 dark:text-primary-300 font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Servicios Profesionales</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            ¿Qué puedo hacer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500">
              por ti?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transformo ideas en soluciones digitales con código limpio, diseño moderno y tecnologías de última generación
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card principal */}
              <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} dark:${service.darkBgGradient} backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                
                {/* Efecto de brillo en hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.highlight}15, transparent 70%)`
                  }}
                />

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Icono con gradiente animado */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} p-0.5 mb-6 shadow-lg`}
                  >
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-gray-900 dark:text-white" />
                    </div>
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features con checkmarks */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${service.accent} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/40 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Precio */}
                  <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Inversión</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {service.price}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Borde brillante animado */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.accent} opacity-20 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: '⚡',
              title: 'Entrega Rápida',
              description: 'Plazos realistas y entregas puntuales para que tu proyecto despegue rápido'
            },
            {
              icon: '🎯',
              title: 'Código Limpio',
              description: 'Arquitectura escalable y documentada para facilitar el mantenimiento futuro'
            },
            {
              icon: '💬',
              title: 'Comunicación Clara',
              description: 'Actualizaciones constantes y feedback en cada etapa del desarrollo'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-white/5"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-xl hover:shadow-2xl border-2 border-gray-200 dark:border-slate-700 transition-all"
            >
              Ver Portfolio
            </motion.a>
          </div>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            💡 Consulta inicial gratuita • Cotización en 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;