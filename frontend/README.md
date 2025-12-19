# Portfolio Frontend

Frontend moderno para portfolio profesional desarrollado con React, Tailwind CSS y Framer Motion.

## 🚀 Características

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - Biblioteca UI moderna
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🎭 **Framer Motion** - Animaciones fluidas y profesionales
- 🌗 **Dark Mode** - Modo claro/oscuro con persistencia
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🎯 **Intersection Observer** - Animaciones al scroll
- 📝 **React Hook Form** - Gestión de formularios
- 🔗 **Axios** - Cliente HTTP para API
- 🎨 **Diseño Ambiental** - Paleta verde inspirada en FreeCodeCamp

## 📋 Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🔧 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## 🎯 Uso

### Modo Desarrollo
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Build de Producción
```bash
npm run build
```

### Vista Previa de Build
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
frontend/
├── public/              # Archivos estáticos
│   └── images/         # Imágenes del proyecto
├── src/
│   ├── components/     # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/        # Context API
│   │   └── ThemeContext.jsx
│   ├── services/       # Servicios API
│   │   └── api.js
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── .env                # Variables de entorno
├── index.html          # HTML principal
├── package.json
├── tailwind.config.js  # Configuración de Tailwind
├── postcss.config.js
└── vite.config.js      # Configuración de Vite
```

## 🎨 Paleta de Colores

### Colores Primarios (Verde - Tema Ambiental)
- Primary 50: #f0fdf4
- Primary 500: #22c55e
- Primary 600: #16a34a
- Primary 700: #15803d

### Colores Oscuros
- Dark 900: #0f172a
- Dark 950: #020617

## 🎭 Animaciones

El proyecto utiliza Framer Motion para animaciones:

- **Fade In**: Apariciones suaves
- **Slide Up**: Deslizamiento desde abajo
- **Scale**: Efectos de escala en hover
- **Stagger**: Animaciones escalonadas en listas
- **Scroll Animations**: Activadas con Intersection Observer

## 📱 Secciones

### Hero
- Introducción con animaciones
- Call-to-action buttons
- Enlaces a redes sociales
- Scroll indicator animado

### About
- Información personal
- Skills cards con iconos
- Estadísticas animadas
- Tecnologías dominadas

### Services
- Grid de servicios
- Cards interactivas con hover effects
- Iconos animados
- Lista de características

### Projects
- Filtros por categoría
- Grid responsive de proyectos
- Preview de imágenes
- Enlaces a demo y código

### Certifications
- Grid de certificaciones
- Información educativa
- Enlaces a credenciales

### Contact
- Formulario con validación
- Información de contacto
- Estado de envío
- Integración con backend API

## 🛠️ Tecnologías Principales

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP Client
- **React Hook Form** - Form Management
- **Lucide React** - Icon Library
- **React Intersection Observer** - Scroll Animations

## 🌗 Modo Oscuro

El modo oscuro:
- Se activa con el botón de toggle
- Persiste en localStorage
- Respeta preferencias del sistema
- Transiciones suaves entre temas

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### Variables de Entorno en Producción
Asegúrate de configurar:
- `VITE_API_URL` - URL del backend en producción

## 🎯 Optimizaciones

- Lazy loading de imágenes
- Code splitting automático con Vite
- Minificación de CSS y JS
- Optimización de fuentes
- Compresión de assets

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Licencia

MIT License

## 👥 Autor

Tu Nombre - [@tuusuario](https://github.com/tuusuario)

## 🙏 Agradecimientos

- FreeCodeCamp por la inspiración del diseño
- Comunidad de React
- Tailwind CSS team
