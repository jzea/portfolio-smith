FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

# Construir la app en modo producción
RUN npm run build

# Exponer el puerto de preview (por defecto 4173)
EXPOSE 4173

# Servir el build en modo producción
CMD ["npm", "run", "preview", "--", "--host"]
