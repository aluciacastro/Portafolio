import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'ingadrianacastroc@gmail.com',
      link: 'mailto:ingadrianacastroc@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Institucional',
      content: 'aluciacastro@unicesar.edu.co',
      link: 'mailto:aluciacastro@unicesar.edu.co',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+57 300 612 3786',
      link: 'tel:+573006123786',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Valledupar, Cesar, Colombia',
      link: 'https://maps.google.com/?q=Valledupar,Colombia',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      content: 'Lun - Vie: 8:00 AM - 6:00 PM',
      link: null,
      color: 'from-orange-500 to-red-500'
    },
  ];

  

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tu idea y ayudarte a hacerla realidad
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Información de contacto principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Información de Contacto
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                    {info.title}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-words"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
          
          </motion.div>


          {/* Nota sobre respuesta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-8 text-center"
          >

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;