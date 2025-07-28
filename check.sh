#!/bin/bash

echo "🔍 Iniciando pré-check do portfólio..."

# 1. Verifica se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
  echo "📦 Instalando dependências..."
  npm install
fi

# 2. Testa o build do projeto
echo "🏗️ Executando build..."
if ! npm run build; then
  echo "❌ Erro no build. Corrija antes de enviar!"
  exit 1
fi

# 3. Sobe o servidor em background para teste do health check
echo "🌐 Subindo aplicação para checar health..."
npm run start & 
SERVER_PID=$!
sleep 5  # espera 5 segundos para o servidor subir

# 4. Faz o health check
HEALTH_URL="http://localhost:3000/api/health"
STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" $HEALTH_URL)

if [ "$STATUS_CODE" -eq 200 ]; then
  echo "✅ Health check passou com sucesso!"
else
  echo "❌ Health check falhou! Status retornado: $STATUS_CODE"
  kill $SERVER_PID
  exit 1
fi

# 5. Finaliza o servidor de teste
kill $SERVER_PID
echo "🎉 Pré-check finalizado com sucesso. Pronto para git push!"
