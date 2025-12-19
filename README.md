# 🚀 Portfolio Profesional Full Stack

Portfolio profesional completo con frontend en React + Tailwind CSS con animaciones Framer Motion y backend en Node.js + Express + MongoDB.

## 📦 Contenido del Proyecto

```
portfolio-fullstack/
├── backend/          # API REST con Node.js, Express y MongoDB
└── frontend/         # Aplicación React con Tailwind CSS y Framer Motion
```

## ✨ Características Principales

### Frontend
- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - UI moderna y reactiva
- 🎨 **Tailwind CSS** - Diseño utility-first
- 🎭 **Framer Motion** - Animaciones fluidas y profesionales
- 🌗 **Dark Mode** - Modo claro/oscuro con persistencia
- 📱 **Responsive** - Adaptable a todos los dispositivos
- 🎯 **Scroll Animations** - Animaciones al hacer scroll
- 🎨 **Diseño Ambiental** - Paleta verde corporativa inspirada en FreeCodeCamp

### Backend
- 🚀 **Express.js** - Framework web minimalista
- 🗄️ **MongoDB** - Base de datos NoSQL
- 🔐 **JWT** - Autenticación segura
- ✅ **Validación** - Express Validator
- 📚 **Swagger** - Documentación interactiva de API
- 🛡️ **Seguridad** - Helmet, CORS, Rate Limiting
- 🔄 **CRUD Completo** - Servicios, Proyectos, Contacto, Empresa

## 🏗️ Arquitectura

### Frontend (React SPA)
```
Componentes → Context API → Services → Backend API
```

### Backend (REST API)
```
Routes → Middlewares → Controllers → Models → MongoDB
```

## 🚀 Inicio Rápido

### 1. Clonar el Repositorio
```bash
git clone <url-del-repositorio>
cd portfolio-fullstack
```

### 2. Configurar Backend

```bash
cd backend
npm install

# Configurar .env
cp .env.example .env
# Editar .env con tus credenciales

# Iniciar servidor de desarrollo
npm run dev
```

El backend estará en `http://localhost:5000`

### 3. Configurar Frontend

```bash
cd frontend
npm install

# Configurar .env
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará en `http://localhost:3000`

## 📱 Secciones del Portfolio

1. **Hero** - Presentación principal con animaciones
2. **About** - Sobre mí, habilidades y estadísticas
3. **Services** - Servicios ofrecidos con detalles
4. **Projects** - Portfolio de proyectos con filtros
5. **Certifications** - Certificaciones y formación académica
6. **Contact** - Formulario de contacto integrado

## 🎨 Paleta de Colores

### Tema Claro
- Fondo: Blanco (#FFFFFF)
- Texto: Gris oscuro (#1F2937)
- Primario: Verde (#22C55E)
- Acento: Esmeralda (#10B981)

### Tema Oscuro
- Fondo: Azul oscuro (#0F172A)
- Texto: Gris claro (#F1F5F9)
- Primario: Verde claro (#4ADE80)
- Acento: Esmeralda claro (#34D399)

## 🛠️ Stack Tecnológico

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Hook Form
- Lucide React (iconos)
- React Intersection Observer

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Express Validator
- Helmet (seguridad)
- CORS
- Express Rate Limit
- Morgan (logging)
- Swagger (documentación)

## 📚 API Endpoints

### Public Routes
```
GET    /api/company              # Información de la empresa
GET    /api/services             # Lista de servicios
GET    /api/projects             # Lista de proyectos
GET    /api/projects/featured    # Proyectos destacados
POST   /api/contact              # Enviar mensaje
```

### Protected Routes (requieren autenticación)
```
PUT    /api/company              # Actualizar empresa
POST   /api/services             # Crear servicio
PUT    /api/services/:id         # Actualizar servicio
DELETE /api/services/:id         # Eliminar servicio
POST   /api/projects             # Crear proyecto
PUT    /api/projects/:id         # Actualizar proyecto
DELETE /api/projects/:id         # Eliminar proyecto
GET    /api/contact              # Ver mensajes
```

## 🔐 Variables de Entorno

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=tu_jwt_secret_super_secreto
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📦 Scripts Disponibles

### Backend
```bash
npm run dev      # Desarrollo con nodemon
npm start        # Producción
npm test         # Tests
```

### Frontend
```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview del build
npm run lint     # Linter
```

## 🚀 Deployment

### Backend
**Opciones recomendadas:**
- Heroku
- Railway
- Render
- DigitalOcean

**Base de datos:**
- MongoDB Atlas (gratis)

### Frontend
**Opciones recomendadas:**
- Vercel (recomendado)
- Netlify
- GitHub Pages

### Pasos generales:

1. **Backend:**
   - Crear cuenta en servicio de hosting
   - Conectar repositorio
   - Configurar variables de entorno
   - Deploy automático

2. **Frontend:**
   - Build: `npm run build`
   - Subir carpeta `dist/`
   - Configurar variable `VITE_API_URL` con URL del backend

## 📁 Estructura Completa

```
portfolio-fullstack/
├── backend/
│   ├── src/
│   │   ├── config/           # Configuraciones
│   │   ├── models/           # Modelos de Mongoose
│   │   ├── controllers/      # Lógica de negocio
│   │   ├── routes/           # Definición de rutas
│   │   ├── middlewares/      # Middlewares personalizados
│   │   ├── validations/      # Validaciones
│   │   ├── docs/             # Swagger
│   │   ├── app.js           # Configuración Express
│   │   └── server.js        # Entrada del servidor
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── frontend/
    ├── public/              # Archivos estáticos
    ├── src/
    │   ├── components/      # Componentes React
    │   ├── context/         # Context API
    │   ├── services/        # Servicios API
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── .env
    ├── package.json
    ├── tailwind.config.js
    └── README.md
```

## 🎯 Características de Producción

- ✅ Validación de datos en frontend y backend
- ✅ Manejo de errores centralizado
- ✅ Rate limiting en endpoints sensibles
- ✅ CORS configurado
- ✅ Headers de seguridad con Helmet
- ✅ Soft delete en recursos
- ✅ Paginación en listados
- ✅ Filtros y búsqueda
- ✅ Responsive design
- ✅ Dark mode persistente
- ✅ Animaciones optimizadas
- ✅ SEO friendly
- ✅ Lazy loading
- ✅ Code splitting

## 🔒 Seguridad

- Helmet para headers HTTP
- CORS configurado correctamente
- Rate limiting en todos los endpoints
- Validación exhaustiva de datos
- JWT para autenticación
- Sanitización de inputs
- Variables de entorno para secretos

## 📈 Optimizaciones

### Frontend
- Lazy loading de imágenes
- Code splitting automático
- Minificación de assets
- Compresión de CSS/JS
- Optimización de fuentes

### Backend
- Índices en MongoDB
- Paginación de resultados
- Cache de consultas frecuentes
- Compresión de respuestas
- Logging eficiente

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 👥 Autor

Tu Nombre - [@tuusuario](https://github.com/tuusuario)

## 🙏 Agradecimientos

- FreeCodeCamp por la inspiración del diseño
- Comunidad de React
- Comunidad de Node.js
- Tailwind CSS team
- Framer Motion team

## 📞 Soporte

Para soporte o consultas:
- Email: support@example.com
- Issues: [GitHub Issues](https://github.com/tuusuario/portfolio/issues)

---

⭐ Si te gusta este proyecto, no olvides darle una estrella!
