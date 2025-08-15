# Paso 1: Construir la aplicación Angular
FROM node:18.19.0 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias primero
COPY package*.json ./

# Instalar las dependencias de la aplicación Angular
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Construir la aplicación Angular en modo producción
RUN npm run build -- --configuration=production

# Paso 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos de la aplicación compilada al servidor Nginx
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
