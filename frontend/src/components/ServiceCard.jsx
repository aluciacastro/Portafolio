import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card p-8 h-full shine-effect"
    >
      <motion.div
        className="text-5xl mb-6"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {service.icon}
      </motion.div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {service.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      {service.features && service.features.length > 0 && (
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-start space-x-3"
            >
              <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
