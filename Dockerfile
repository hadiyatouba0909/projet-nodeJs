# Utiliser l'image Node.js officielle
FROM node:20-alpine

# Créer le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]















