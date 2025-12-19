const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const corsOptions = require('./config/cors');
const { apiLimiter } = require('./config/rateLimit');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

// Seguridad
app.use(helmet());

// CORS
app.use(cors(corsOptions));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
app.use('/api/', apiLimiter);

// Rutas principales
app.use('/api', routes);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio API',
    version: '1.0.0',
    documentation: '/api-docs'
  });
});

// Manejo de errores
app.use(notFound);
app.use(errorHandler);

module.exports = app;
