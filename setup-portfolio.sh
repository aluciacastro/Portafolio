#!/bin/bash

# Script de configuración completa del proyecto Portfolio

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     🚀 CONFIGURACIÓN PORTFOLIO FULL STACK                    ║"
echo "║        React + Tailwind + Node.js + MongoDB                  ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para verificar si un comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Verificar requisitos previos
echo "📋 Verificando requisitos previos..."
echo ""

# Verificar Node.js
if command_exists node; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✅ Node.js instalado: $NODE_VERSION${NC}"
else
    echo -e "${RED}❌ Node.js no está instalado${NC}"
    echo "   Por favor instala Node.js desde https://nodejs.org"
    exit 1
fi

# Verificar npm
if command_exists npm; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✅ npm instalado: v$NPM_VERSION${NC}"
else
    echo -e "${RED}❌ npm no está instalado${NC}"
    exit 1
fi

# Verificar MongoDB
if command_exists mongod; then
    MONGO_VERSION=$(mongod --version | head -n 1)
    echo -e "${GREEN}✅ MongoDB instalado: $MONGO_VERSION${NC}"
else
    echo -e "${YELLOW}⚠️  MongoDB no detectado localmente${NC}"
    echo "   Puedes usar MongoDB Atlas (cloud) como alternativa"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Configurar Backend
echo "🔧 Configurando Backend..."
echo ""

if [ -d "backend" ]; then
    cd backend
    
    # Crear .env desde .env.example
    if [ -f .env.example ]; then
        if [ ! -f .env ]; then
            cp .env.example .env
            echo -e "${GREEN}✅ Archivo backend/.env creado${NC}"
            
            # Generar JWT Secret
            if command_exists openssl; then
                JWT_SECRET=$(openssl rand -base64 32)
                if [[ "$OSTYPE" == "darwin"* ]]; then
                    sed -i '' "s/tu_jwt_secret_super_secreto_cambialo_en_produccion/$JWT_SECRET/" .env
                else
                    sed -i "s/tu_jwt_secret_super_secreto_cambialo_en_produccion/$JWT_SECRET/" .env
                fi
                echo -e "${GREEN}✅ JWT Secret generado automáticamente${NC}"
            fi
        else
            echo -e "${YELLOW}⚠️  backend/.env ya existe, omitiendo...${NC}"
        fi
    fi
    
    cd ..
else
    echo -e "${RED}❌ Directorio backend/ no encontrado${NC}"
fi

echo ""

# Configurar Frontend
echo "⚛️  Configurando Frontend..."
echo ""

if [ -d "frontend" ]; then
    cd frontend
    
    # Crear .env desde .env.example
    if [ -f .env.example ]; then
        if [ ! -f .env ]; then
            cp .env.example .env
            echo -e "${GREEN}✅ Archivo frontend/.env creado${NC}"
        else
            echo -e "${YELLOW}⚠️  frontend/.env ya existe, omitiendo...${NC}"
        fi
    fi
    
    cd ..
else
    echo -e "${RED}❌ Directorio frontend/ no encontrado${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Preguntar si desea instalar dependencias
read -p "¿Deseas instalar las dependencias de npm ahora? (s/n): " install_deps

if [ "$install_deps" = "s" ]; then
    echo ""
    echo "📦 Instalando dependencias del Backend..."
    cd backend && npm install
    echo -e "${GREEN}✅ Dependencias del backend instaladas${NC}"
    cd ..
    
    echo ""
    echo "📦 Instalando dependencias del Frontend..."
    cd frontend && npm install
    echo -e "${GREEN}✅ Dependencias del frontend instaladas${NC}"
    cd ..
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✨ ¡Configuración completada!"
echo ""
echo "📋 PRÓXIMOS PASOS:"
echo ""
echo "1. Verifica la configuración en backend/.env"
echo "   - Especialmente MONGODB_URI si usas MongoDB Atlas"
echo ""
echo "2. Inicia el backend (en una terminal):"
echo "   ${GREEN}cd backend && npm run dev${NC}"
echo ""
echo "3. Inicia el frontend (en otra terminal):"
echo "   ${GREEN}cd frontend && npm run dev${NC}"
echo ""
echo "4. Abre tu navegador en: ${GREEN}http://localhost:3000${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📚 Documentación:"
echo "   • README.md - Documentación completa"
echo "   • QUICKSTART.md - Guía de inicio rápido"
echo "   • Backend: http://localhost:5000/api-docs (Swagger)"
echo ""
echo "🎨 Features:"
echo "   • Modo oscuro/claro"
echo "   • Animaciones Framer Motion"
echo "   • Formulario de contacto"
echo "   • Portfolio de proyectos"
echo "   • API REST completa"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
