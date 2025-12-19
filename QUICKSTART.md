# 🚀 Guía de Inicio Rápido - Portfolio Full Stack

Esta guía te ayudará a tener el proyecto funcionando en minutos.

## ⚡ Instalación Express (5 minutos)

### Opción A: Script Automático (Recomendado) 🚀

Simplemente ejecuta el script de configuración:

```bash
# En la raíz del proyecto
./setup-portfolio.sh
```

Este script:
- ✅ Verifica requisitos (Node.js, npm, MongoDB)
- ✅ Crea archivos .env automáticamente
- ✅ Genera JWT secret aleatorio
- ✅ Opcionalmente instala dependencias
- ✅ Te guía paso a paso

### Opción B: Configuración Manual

Si prefieres configurar manualmente:

### Paso 1: Requisitos Previos
Asegúrate de tener instalado:
- Node.js (v18 o superior)
- MongoDB (local o cuenta en MongoDB Atlas)
- Git

### Paso 2: Clonar y Configurar

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd portfolio-fullstack

# Configurar Backend
cd backend
npm install

# Crear archivo .env
cat > .env << EOF
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=$(openssl rand -base64 32)
FRONTEND_URL=http://localhost:3000
EOF

# Iniciar backend
npm run dev
```

Backend corriendo en: http://localhost:5000 ✅

### Paso 3: Configurar Frontend (nueva terminal)

```bash
# Desde la raíz del proyecto
cd frontend
npm install

# Crear archivo .env
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Iniciar frontend
npm run dev
```

Frontend corriendo en: http://localhost:3000 ✅

## 🎉 ¡Listo!

Abre tu navegador en http://localhost:3000 y disfruta tu portfolio.

---

## 🗄️ Usando MongoDB Atlas (Recomendado para desarrollo)

Si no tienes MongoDB instalado localmente:

1. Crea cuenta gratis en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un cluster gratuito
3. Obtén tu connection string
4. En `backend/.env` cambia:
   ```
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/portfolio_db
   ```

---

## 🎨 Personalización Rápida

### Cambiar Colores
Edita `frontend/tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#TU_COLOR', // Cambia aquí
  }
}
```

### Cambiar Información Personal
Edita los componentes en `frontend/src/components/`:
- `Hero.jsx` - Texto de bienvenida
- `AboutSection.jsx` - Tu historia
- `ContactSection.jsx` - Tus datos de contacto

### Agregar Proyectos
Desde el backend, haz POST a `/api/projects` con tu proyecto.

O edita los datos de ejemplo en `ProjectsSection.jsx`.

---

## 🐛 Solución de Problemas Comunes

### Backend no inicia
```bash
# Verifica que MongoDB esté corriendo
mongod --version

# O si usas Atlas, verifica tu connection string
```

### Frontend no se conecta al Backend
```bash
# Verifica que el backend esté corriendo
curl http://localhost:5000/api/health

# Verifica VITE_API_URL en frontend/.env
```

### Error de CORS
Verifica que `FRONTEND_URL` en `backend/.env` coincida con la URL del frontend.

---

## 📦 Build para Producción

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
# Los archivos estarán en dist/
```

---

## 🚀 Deploy Rápido

### Frontend en Vercel (Gratis)
```bash
cd frontend
npm install -g vercel
vercel
```

### Backend en Railway (Gratis)
1. Ve a [railway.app](https://railway.app)
2. Conecta tu repositorio
3. Deploy automático ✅

---

## 📚 Recursos Útiles

- [Documentación React](https://react.dev)
- [Documentación Tailwind](https://tailwindcss.com)
- [Documentación Framer Motion](https://www.framer.com/motion)
- [Documentación Express](https://expressjs.com)
- [Documentación MongoDB](https://docs.mongodb.com)

---

## 💡 Tips

1. **Modo Oscuro**: Haz clic en el icono de luna/sol en la navbar
2. **Animaciones**: Desplázate lentamente para ver todas las animaciones
3. **Responsive**: Prueba en diferentes tamaños de pantalla
4. **API Docs**: Visita http://localhost:5000/api-docs para ver la documentación Swagger

---

## 🆘 ¿Necesitas Ayuda?

1. Revisa la documentación completa en README.md
2. Busca en los issues del repositorio
3. Contacta al autor

---

¡Feliz coding! 🎉
