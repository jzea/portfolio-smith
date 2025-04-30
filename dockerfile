FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto de Vite (por defecto 5173)
EXPOSE 5173

# Comando para levantar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
