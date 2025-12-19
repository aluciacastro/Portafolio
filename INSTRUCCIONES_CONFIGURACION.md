# 📝 Instrucciones de Configuración - Portfolio Full Stack

## 🎯 Archivos de Configuración Incluidos

### Backend
- ✅ `.env.example` - Plantilla de variables de entorno
- ✅ `setup.sh` - Script de configuración automática

### Frontend  
- ✅ `.env.example` - Plantilla de variables de entorno
- ✅ `setup.sh` - Script de configuración automática

### Raíz del Proyecto
- ✅ `setup-portfolio.sh` - Script maestro que configura todo

---

## 🚀 Método 1: Configuración Automática (Recomendado)

### Opción Simple - Un Solo Comando

Desde la raíz del proyecto, ejecuta:

```bash
./setup-portfolio.sh
```

Este script hace todo automáticamente:
1. Verifica que tengas Node.js y npm instalados
2. Crea los archivos `.env` en backend y frontend
3. Genera un JWT secret aleatorio y seguro
4. Pregunta si quieres instalar dependencias
5. Te muestra los próximos pasos

### Opción por Partes

Si prefieres configurar cada parte por separado:

**Backend:**
```bash
cd backend
./setup.sh
```

**Frontend:**
```bash
cd frontend
./setup.sh
```

---

## ⚙️ Método 2: Configuración Manual

### Paso 1: Backend

```bash
cd backend

# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tu editor favorito
nano .env  # o code .env, vim .env, etc.
```

**Contenido del `.env` del backend:**
```dotenv
# Configuración del servidor
NODE_ENV=development
PORT=5000

# Base de datos MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio_db

# JWT Secret (cambiar en producción)
JWT_SECRET=tu_jwt_secret_super_secreto_cambialo_en_produccion

# Frontend URL para CORS
FRONTEND_URL=http://localhost:3000

# API URL
API_URL=http://localhost:5000
```

**⚠️ IMPORTANTE:** Cambia el `JWT_SECRET` por algo seguro. Puedes generarlo con:
```bash
openssl rand -base64 32
```

### Paso 2: Frontend

```bash
cd frontend

# Copiar el archivo de ejemplo
cp .env.example .env

# Editar si es necesario
nano .env
```

**Contenido del `.env` del frontend:**
```dotenv
VITE_API_URL=http://localhost:5000/api
```

### Paso 3: Instalar Dependencias

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

---

## 🗄️ Configuración de MongoDB

### Opción A: MongoDB Local

Si tienes MongoDB instalado localmente:

```bash
# Iniciar MongoDB
mongod

# O en macOS con Homebrew:
brew services start mongodb-community
```

El `.env` ya está configurado para MongoDB local:
```
MONGODB_URI=mongodb://localhost:27017/portfolio_db
```

### Opción B: MongoDB Atlas (Cloud - Recomendado)

1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea una cuenta gratuita
3. Crea un cluster (tier gratuito)
4. Obtén tu connection string
5. En `backend/.env`, reemplaza:

```dotenv
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/portfolio_db?retryWrites=true&w=majority
```

**Importante:** Asegúrate de:
- Whitelist tu IP en MongoDB Atlas
- Crear un usuario de base de datos
- Reemplazar `usuario` y `password` con tus credenciales

---

## ▶️ Iniciar el Proyecto

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

Deberías ver:
```
🚀 Servidor corriendo en modo development en el puerto 5000
MongoDB Connected: ...
📚 Documentación disponible en: http://localhost:5000/api-docs
```

### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Deberías ver:
```
VITE v5.0.8  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

---

## ✅ Verificación

### 1. Backend Funcionando

Abre en tu navegador:
```
http://localhost:5000/api/health
```

Deberías ver:
```json
{
  "status": "OK",
  "message": "API is running",
  "timestamp": "..."
}
```

### 2. Frontend Funcionando

Abre en tu navegador:
```
http://localhost:3000
```

Deberías ver tu portfolio con:
- Hero con animaciones
- Navegación funcionando
- Modo oscuro/claro

### 3. Documentación API

```
http://localhost:5000/api-docs
```

---

## 🐛 Solución de Problemas

### Error: "Cannot connect to MongoDB"

**Solución 1:** Si usas MongoDB local
```bash
# Verifica que MongoDB esté corriendo
mongod --version
sudo systemctl status mongod  # Linux
brew services list  # macOS
```

**Solución 2:** Si usas MongoDB Atlas
- Verifica tu connection string en `.env`
- Asegúrate de haber whitelistado tu IP
- Verifica usuario y contraseña

### Error: "Port 5000 already in use"

Cambia el puerto en `backend/.env`:
```dotenv
PORT=5001
```

Y actualiza también en `frontend/.env`:
```dotenv
VITE_API_URL=http://localhost:5001/api
```

### Error: "CORS policy blocked"

Verifica que en `backend/.env` el `FRONTEND_URL` sea correcto:
```dotenv
FRONTEND_URL=http://localhost:3000
```

### Error: Variables de entorno no se cargan

En el frontend, las variables **DEBEN** empezar con `VITE_`:
```dotenv
VITE_API_URL=http://localhost:5000/api
```

---

## 📚 Archivos de Configuración Detallados

### backend/.env

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| NODE_ENV | Entorno de ejecución | development |
| PORT | Puerto del servidor | 5000 |
| MONGODB_URI | URI de conexión MongoDB | mongodb://localhost:27017/portfolio_db |
| JWT_SECRET | Clave secreta para JWT | (generar uno seguro) |
| FRONTEND_URL | URL del frontend para CORS | http://localhost:3000 |
| API_URL | URL de la API | http://localhost:5000 |

### frontend/.env

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| VITE_API_URL | URL de la API backend | http://localhost:5000/api |

---

## 🎨 Personalización Rápida

Una vez que todo esté funcionando, puedes personalizar:

### 1. Información Personal

Edita estos componentes en `frontend/src/components/`:
- `Hero.jsx` - Texto principal
- `AboutSection.jsx` - Tu historia
- `ContactSection.jsx` - Tus datos

### 2. Colores

Edita `frontend/tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#TU_COLOR_AQUI',
  }
}
```

### 3. Proyectos

Los datos de ejemplo están en:
- `frontend/src/components/ProjectsSection.jsx`

O puedes agregarlos vía API POST a `/api/projects`

---

## 🚀 Próximos Pasos

1. ✅ Configurar variables de entorno
2. ✅ Instalar dependencias
3. ✅ Iniciar backend y frontend
4. 📝 Personalizar contenido
5. 🎨 Ajustar colores/diseño
6. 📸 Agregar tus proyectos reales
7. 🌐 Hacer deploy (Vercel + Railway)

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa la [documentación completa](README.md)
2. Lee el [QUICKSTART.md](QUICKSTART.md)
3. Verifica la [estructura del proyecto](ESTRUCTURA_PROYECTO.txt)
4. Busca en los logs de error mensajes específicos

---

¡Feliz desarrollo! 🎉
