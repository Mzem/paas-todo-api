## Instructions pour les TPs

### Pré-requis
- Docker, Docker Compose, POSTMAN (ou CURL)

## TP3 : WORKER
1. Installer les nouveaux packages `npm install`
2. Provisionner le Redis en local `docker-compose up -d`
3. Rattacher votre application au Redis
4. Compléter et lancer la nouvelle migration `npm run migrate`
5. Compléter le code de `worker.js`
6. Ajouter le script pour lancer le worker dans `package.json`
7. Lancer l'application en local et tester le comportement du WORKER
8. Préparer votre application pour le déploiement :
   1. Configurer le démarrage en mode WEB et WORKER via le `Procfile`
   2. Provisionner un Redis sur Scalingo
   3. Déployer (automatique lors d'un push du master local sur master du repo en remote)


Pour tester le worker en local:

1er terminal :
`docker compose up -d`
`npm run migrate`
`npm run start`
2e terminal :
`node worker.js`
3e terminal :
`curl -X POST -H "Content-Type: application/json" localhost:3000/todos -d '{"description":"ahahah", "date_echeance":"2023-01-11T12:24:30+01:00"}'`

http://localhost:3000/todos

autre terminal :
`node clean-todos.js`