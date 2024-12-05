import 'dotenv/config';
import express from 'express';
import swagger from './swagger/swagger.js';  // Ajoutez l'extension .js
const app = express();

const port = process.env.PORT || 3000;

// Documentation Swagger
app.use('/api-docs', swagger.serve, swagger.setup);

// Routes
app.get('/', (req, res) => {
    res.send(process.env.MESSAGE);
});

app.listen(port, () => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`);
    console.log(`Documentation Swagger disponible sur http://localhost:${port}/api-docs`);
});