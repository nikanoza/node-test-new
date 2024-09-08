import express from "express";
import dotenv from "dotenv";
import { users } from "./data.js";
import pool from "./config/database.js";

dotenv.config();
const app = express();

const init = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS USERS (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        age INT
      );
    `;

    await pool.query(createTableQuery);
  } catch (error) {
    console.error("Error creating USERS table:", error);
  }
};

init();

app.get("/users", async (_, res) => {
  return res.status(200).json({ message: "Api requests!", users });
});

app.get("/products", async (_, res) => {
  return res.status(200).json({ message: "Api requests!", users });
});

app.get("/orders", async (_, res) => {
  return res.status(200).json({ message: "Api requests!", users });
});

app.listen(3000);
