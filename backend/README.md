# Portfolio Backend API

API REST para la gestión de un portfolio profesional desarrollada con Node.js, Express y MongoDB.

## 🚀 Características

- **Gestión de Servicios**: CRUD completo para servicios ofrecidos
- **Gestión de Proyectos**: CRUD completo con filtros por categoría y estado
- **Mensajes de Contacto**: Sistema de mensajes con rate limiting
- **Información de Empresa**: Gestión de datos corporativos
- **Autenticación JWT**: Protección de rutas administrativas
- **Validación de Datos**: Validación robusta con express-validator
- **Documentación Swagger**: Documentación interactiva de la API
- **Rate Limiting**: Protección contra abuso de endpoints
- **CORS configurado**: Manejo seguro de peticiones cross-origin

## 📋 Requisitos Previos

- Node.js >= 18.0.0
- MongoDB >= 6.0
- npm >= 9.0.0

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` con tus configuraciones:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=tu_jwt_secret_super_secreto
FRONTEND_URL=http://localhost:3000
```

4. Iniciar MongoDB (si está en local):
```bash
mongod
```

## 🎯 Uso

### Modo Desarrollo
```bash
npm run dev
```

### Modo Producción
```bash
npm start
```

### Ejecutar Tests
```bash
npm test
```

## 📚 Documentación API

Una vez iniciado el servidor, accede a la documentación interactiva en:
```
http://localhost:5000/api-docs
```

## 🛣️ Endpoints Principales

### Company (Empresa)
- `GET /api/company` - Obtener información de la empresa
- `PUT /api/company` - Actualizar información (protegido)
- `GET /api/company/stats` - Obtener estadísticas

### Services (Servicios)
- `GET /api/services` - Listar servicios activos
- `GET /api/services/:id` - Obtener servicio por ID
- `POST /api/services` - Crear servicio (protegido)
- `PUT /api/services/:id` - Actualizar servicio (protegido)
- `DELETE /api/services/:id` - Eliminar servicio (protegido)

### Projects (Proyectos)
- `GET /api/projects` - Listar proyectos con filtros
- `GET /api/projects/:id` - Obtener proyecto por ID
- `GET /api/projects/featured` - Proyectos destacados
- `GET /api/projects/categories/list` - Listar categorías
- `POST /api/projects` - Crear proyecto (protegido)
- `PUT /api/projects/:id` - Actualizar proyecto (protegido)
- `DELETE /api/projects/:id` - Eliminar proyecto (protegido)

### Contact (Contacto)
- `POST /api/contact` - Enviar mensaje (rate limited)
- `GET /api/contact` - Listar mensajes (protegido)
- `GET /api/contact/:id` - Obtener mensaje (protegido)
- `PUT /api/contact/:id/status` - Actualizar estado (protegido)
- `DELETE /api/contact/:id` - Eliminar mensaje (protegido)
- `GET /api/contact/stats` - Estadísticas (protegido)

### Health Check
- `GET /api/health` - Verificar estado de la API

## 🔐 Autenticación

Las rutas protegidas requieren un token JWT en el header:
```
Authorization: Bearer <token>
```

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── config/          # Configuraciones (DB, CORS, Rate Limit)
│   ├── models/          # Modelos de Mongoose
│   ├── controllers/     # Controladores de rutas
│   ├── routes/          # Definición de rutas
│   ├── middlewares/     # Middlewares personalizados
│   ├── validations/     # Validaciones de entrada
│   ├── docs/            # Configuración de Swagger
│   ├── app.js           # Configuración de Express
│   └── server.js        # Punto de entrada
├── .env                 # Variables de entorno
├── .gitignore
├── package.json
└── README.md
```

## 🛡️ Seguridad

- Helmet para headers de seguridad HTTP
- Rate limiting en endpoints sensibles
- Validación de datos de entrada
- CORS configurado correctamente
- JWT para autenticación
- Sanitización de datos con express-validator

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Tests con coverage
npm run test:coverage
```

## 📦 Dependencias Principales

- **express**: Framework web
- **mongoose**: ODM para MongoDB
- **express-validator**: Validación de datos
- **jsonwebtoken**: Autenticación JWT
- **helmet**: Seguridad HTTP
- **cors**: Manejo de CORS
- **express-rate-limit**: Limitación de peticiones
- **swagger-ui-express**: Documentación API

## 🚀 Deployment

### Variables de Entorno de Producción
Asegúrate de configurar:
- `NODE_ENV=production`
- `MONGODB_URI` con tu URI de MongoDB Atlas o servidor remoto
- `JWT_SECRET` con un valor seguro y único
- `FRONTEND_URL` con la URL de tu frontend en producción

### Servicios Recomendados
- **Backend**: Heroku, Railway, Render, DigitalOcean
- **Base de Datos**: MongoDB Atlas
- **DNS/CDN**: Cloudflare

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autor

Tu Nombre - [@tuusuario](https://github.com/tuusuario)

## 📧 Contacto

Para soporte o consultas: support@example.com
```

Ahora mueve todos los archivos a `/mnt/user-data/outputs/` para que puedas descargarlos:

```bash
cp -r /home/claude/backend /mnt/user-data/outputs/
