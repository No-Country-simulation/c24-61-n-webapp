# Paso 1: Construir la aplicación
FROM node:18.19.0 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación (incluido package.json) al contenedor
COPY front/package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del frontend
COPY frontend/ .

# Construir la aplicación Angular
RUN npm run build --prod

# Paso 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos de la aplicación construida al servidor Nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
