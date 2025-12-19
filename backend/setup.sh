#!/bin/bash

# Script de configuración rápida para el backend

echo "🚀 Configurando Backend Portfolio..."
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

# Generar JWT Secret aleatorio
if command -v openssl &> /dev/null; then
    JWT_SECRET=$(openssl rand -base64 32)
    # Reemplazar el JWT_SECRET en .env
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/tu_jwt_secret_super_secreto_cambialo_en_produccion/$JWT_SECRET/" .env
    else
        # Linux
        sed -i "s/tu_jwt_secret_super_secreto_cambialo_en_produccion/$JWT_SECRET/" .env
    fi
    echo "✅ JWT Secret generado automáticamente"
else
    echo "⚠️  OpenSSL no encontrado. Por favor, genera un JWT_SECRET manualmente."
fi

echo ""
echo "📝 Configuración actual del .env:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cat .env
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "📋 Próximos pasos:"
echo "1. Verifica/edita el archivo .env si necesitas cambiar algo"
echo "2. Asegúrate de que MongoDB esté corriendo (local o Atlas)"
echo "3. Ejecuta: npm install"
echo "4. Ejecuta: npm run dev"
echo ""
echo "✨ ¡Configuración completada!"
