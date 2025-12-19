#!/bin/bash

# Script de configuración rápida para el frontend

echo "🚀 Configurando Frontend Portfolio..."
echo ""

# Verificar si .env ya existe
if [ -f .env ]; then
    echo "⚠️  El archivo .env ya existe."
    read -p "¿Deseas sobrescribirlo? (s/n): " overwrite
    if [ "$overwrite" != "s" ]; then
        echo "❌ Configuración cancelada."
        exit 0
    fi
fi

# Copiar .env.example a .env
cp .env.example .env
echo "✅ Archivo .env creado desde .env.example"
echo ""

echo "📝 Configuración actual del .env:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cat .env
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "💡 Nota: Si tu backend está en un puerto diferente,"
echo "   edita el archivo .env y cambia VITE_API_URL"
echo ""

echo "📋 Próximos pasos:"
echo "1. Verifica/edita el archivo .env si es necesario"
echo "2. Asegúrate de que el backend esté corriendo"
echo "3. Ejecuta: npm install"
echo "4. Ejecuta: npm run dev"
echo ""
echo "✨ ¡Configuración completada!"
