# Usa la imagen oficial de Node (versión 24)
FROM node:24

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto (ajústalo según lo que use tu app)
EXPOSE 3000

# Comando por defecto para iniciar la app en modo desarrollo
CMD ["npm", "run", "dev"]
