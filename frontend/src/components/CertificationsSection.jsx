import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, GraduationCap, FileText } from 'lucide-react';

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Acelerador de Carrera con Power BI',
      institution: 'ZAKIDATA',
      date: 'Noviembre 2024',
      credential: '/images/credentials/POWER BI ADRIANA CASTRO .pdf',
      credentialUrl: null,
      logo: '/images/certifications/zakidata-logo.jpg',
      skills: ['Power BI', 'Data Analysis', 'Business Intelligence']
    },
    {
      title: 'Artificial Intelligence with Machine Learning in Java',
      institution: 'Oracle Academy',
      date: 'Octubre 2024',
      credential: '/images/credentials/Adriana Castro Artificial Intelligence with Machine Learning in Java.pdf',
      credentialUrl: null,
      logo: '/images/certifications/oracle-logo.png',
      skills: ['Java', 'Machine Learning', 'AI']
    },
    {
      title: 'Oracle Cloud Infrastructure Foundations I',
      institution: 'Oracle Academy',
      date: '2024',
      credential: '/images/credentials/ADRIANA LUCIA CASTROCARREÑO_Oracle_Cloud_Infrastructure_Foundations_I_-_English.pdf',
      credentialUrl: null,
      logo: '/images/certifications/oracle-logo.png',
      skills: ['Oracle Cloud', 'Cloud Infrastructure', 'OCI']
    },
    {
      title: 'Oracle Cloud Infrastructure Foundations II',
      institution: 'Oracle Academy',
      date: '2024',
      credential: '/images/credentials/ADRIANA LUCIA CASTROCARREÑO_Oracle_Cloud_Infrastructure_Foundations_II_-_English.pdf',
      credentialUrl: null,
      logo: '/images/certifications/oracle-logo.png',
      skills: ['Oracle Cloud', 'Cloud Infrastructure', 'OCI']
    },
    {
      title: 'AWS Educate - Getting Started with Storage',
      institution: 'Amazon Web Services',
      date: '2024',
      credential: '/images/credentials/CERTIFICADO_AWS EDUCATE GETTING STARTRED WITH STORAGE.pdf',
      credentialUrl: null,
      logo: null,
      skills: ['AWS', 'Cloud Storage', 'S3']
    },
    {
      title: 'Curso Arquitectura en la Nube',
      institution: 'Certificación',
      date: '2024',
      credential: '/images/credentials/CERTIFICADO CURSO ARQUITECTURA EN LA NUBE.pdf',
      credentialUrl: null,
      logo: null,
      skills: ['Cloud Architecture', 'Arquitectura', 'Nube']
    },
    {
      title: 'Getting Started with Compute',
      institution: 'Certificación',
      date: '2024',
      credential: '/images/credentials/Certificado Getting Started with Compute.pdf',
      credentialUrl: null,
      logo: null,
      skills: ['Cloud Computing', 'Compute']
    },
    {
      title: 'AWS Educate - Introduction to Cloud 101',
      institution: 'Amazon Web Services',
      date: '2024',
      credential: '/images/credentials/INSIGNIAAWS EDUCATE INTRODUCTION TO_CLOUD 101.pdf',
      credentialUrl: null,
      logo: null,
      skills: ['AWS', 'Cloud Fundamentals', 'Cloud 101']
    },
    {
      title: 'Introduction to Cybersecurity',
      institution: 'Cisco Networking Academy',
      date: 'Octubre 2024',
      credential: null,
      credentialUrl: null,
      logo: '/images/certifications/cisco-logo.png',
      skills: ['Cybersecurity', 'Network Security']
    },
    {
      title: 'MongoDB Aggregation',
      institution: 'MongoDB University',
      date: 'Octubre 2024',
      credential: null,
      credentialUrl: null,
      logo: '/images/certifications/mongodb-logo.png',
      skills: ['MongoDB', 'Database', 'Aggregation Framework']
    },
    {
      title: 'MongoDB Data Modeling',
      institution: 'MongoDB University',
      date: 'Junio 2024',
      credential: null,
      credentialUrl: null,
      logo: '/images/certifications/mongodb-logo.png',
      skills: ['MongoDB', 'Data Modeling', 'Database Design']
    },
    {
      title: 'HCIA-AI V3.0',
      institution: 'Huawei ICT Academy',
      date: 'Noviembre 2024',
      credential: null,
      credentialUrl: null,
      logo: '/images/certifications/huawei-logo.png',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Huawei']
    },
  ];

  const education = [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Popular del Cesar',
      location: 'Valledupar, Colombia',
      period: '2021 - Presente (9no Semestre)',
      status: 'En Curso',
      description: 'Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos. Enfoque en desarrollo web full stack y análisis de datos.',
      color: 'from-primary-500 to-blue-500'
    },
    {
      degree: 'Técnico en Sistemas',
      institution: 'SENA Regional Cesar',
      location: 'Valledupar, Colombia',
      period: 'Graduada: Agosto 2020',
      status: 'Completado',
      description: 'Formación técnica completa en mantenimiento de equipos de cómputo, configuración de redes, y desarrollo de software básico.',
      color: 'from-blue-500 to-purple-500'
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
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
            Certificaciones y Formación
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Compromiso continuo con el aprendizaje y la mejora profesional
          </p>
        </motion.div>

        {/* Formación Académica */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center"
          >
            <GraduationCap className="w-8 h-8 mr-3 text-primary-500" />
            Formación Académica
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-xs font-semibold mb-4`}>
                  {edu.status}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  📍 {edu.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  📅 {edu.period}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificaciones Profesionales */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center"
          >
            <Award className="w-8 h-8 mr-3 text-primary-500" />
            Certificaciones Profesionales
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-2xl transition-all group flex flex-col"
              >
                {/* Logo de la institución */}
                <div className="w-16 h-16 mb-4 rounded-lg bg-white dark:bg-slate-700 p-2 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={`${cert.institution} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Error loading logo: ${cert.logo}`);
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          parent.classList.add('bg-gradient-to-br', 'from-primary-100', 'to-blue-100', 'dark:from-primary-900/30', 'dark:to-blue-900/30');
                          parent.innerHTML = '<div class="text-4xl fallback-icon">🏆</div>';
                        }
                      }}
                    />
                  ) : (
                    <div className="text-4xl">🏆</div>
                  )}
                </div>

                {/* Título */}
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {cert.title}
                </h4>

                {/* Institución */}
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3 text-sm">
                  {cert.institution}
                </p>

                {/* Fecha */}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{cert.date}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Botón para ver certificado */}
                {cert.credential ? (
                  <motion.a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      console.log('Opening PDF:', cert.credential);
                    }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-lg hover:from-primary-600 hover:to-blue-600 transition-all font-medium text-sm flex items-center justify-center gap-2 shadow-md mt-auto cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    Ver Certificado
                  </motion.a>
                ) : (
                  <div className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-lg text-center text-sm mt-auto">
                    Certificado en proceso
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {certifications.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Certificaciones
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Títulos Académicos
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              6+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Instituciones
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-red-50 dark:from-slate-800 dark:to-slate-900">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
              2024
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Última Certificación
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            En constante aprendizaje y actualización de conocimientos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Trabajemos juntos
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-slate-700 transition-all"
            >
              Ver mis proyectos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;