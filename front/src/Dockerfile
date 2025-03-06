# Paso 1: Construir la aplicación
FROM node:18.19.0 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la aplicación
RUN npm run build --prod

# Paso 2: Servir la aplicación con un servidor estático
FROM nginx:alpine

# Copiar los archivos de la aplicación construida al servidor Nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
