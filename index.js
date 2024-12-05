import "dotenv/config";
import express from "express";
import swagger from "./swagger/swagger.js"; // Ajoutez l'extension .js
import pool from "./config/db.config.js";

const app = express();

const port = process.env.PORT || 5000;

// Documentation Swagger
app.use("/api-docs", swagger.serve, swagger.setup);

// Routes
app.get("/", (req, res) => {
  res.send(process.env.MESSAGE);
});

// Test de connexion
try {
  const connection = await pool.getConnection();
  console.log("Connecté à la base de données MySQL");
  connection.release();
} catch (error) {
  console.error("Erreur de connexion à la base de données:", error);
}

app.listen(port, () => {
  console.log(`Le serveur est démarré sur http://localhost:${port}`);
  console.log(
    `Documentation Swagger disponible sur http://localhost:${port}/api-docs`
  );
});
