import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesService } from '../services/api';
import ServiceCard from './ServiceCard';
import { Loader2 } from 'lucide-react';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesService.getAll();
        setServices(response.data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Error al cargar servicios');
        // Usar datos de ejemplo si falla la API
        setServices([
          {
            _id: '1',
            title: 'Desarrollo Web',
            description: 'Creación de sitios web modernos, responsivos y optimizados para SEO.',
            icon: '🌐',
            features: [
              'Diseño responsive',
              'Optimización SEO',
              'Integración de APIs',
              'Panel de administración'
            ]
          },
          {
            _id: '2',
            title: 'Aplicaciones Móviles',
            description: 'Desarrollo de aplicaciones nativas e híbridas para iOS y Android.',
            icon: '📱',
            features: [
              'React Native',
              'Flutter',
              'Integración con servicios cloud',
              'Push notifications'
            ]
          },
          {
            _id: '3',
            title: 'Backend & APIs',
            description: 'Desarrollo de APIs RESTful y GraphQL escalables y seguras.',
            icon: '⚙️',
            features: [
              'Node.js & Express',
              'Bases de datos SQL/NoSQL',
              'Autenticación JWT',
              'Microservicios'
            ]
          },
          {
            _id: '4',
            title: 'Cloud & DevOps',
            description: 'Configuración de infraestructura cloud y pipelines de CI/CD.',
            icon: '☁️',
            features: [
              'AWS / Azure / Google Cloud',
              'Docker & Kubernetes',
              'CI/CD con GitHub Actions',
              'Monitoreo y logging'
            ]
          },
          {
            _id: '5',
            title: 'Consultoría Tech',
            description: 'Asesoramiento en arquitectura de software y mejores prácticas.',
            icon: '💡',
            features: [
              'Auditoría de código',
              'Arquitectura de sistemas',
              'Code review',
              'Optimización de rendimiento'
            ]
          },
          {
            _id: '6',
            title: 'UI/UX Design',
            description: 'Diseño de interfaces centradas en el usuario con las mejores prácticas.',
            icon: '🎨',
            features: [
              'Prototipado en Figma',
              'Design Systems',
              'User research',
              'Testing de usabilidad'
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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
      <section id="services" className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-12 h-12 animate-spin text-primary-600" />
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Servicios</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            ¿En qué puedo{' '}
            <span className="gradient-text">ayudarte</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Ofrezco una amplia gama de servicios de desarrollo y consultoría
            para llevar tus proyectos al siguiente nivel.
          </motion.p>
        </motion.div>

        {error && !services.length && (
          <div className="text-center text-red-600 dark:text-red-400 mb-8">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service._id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
