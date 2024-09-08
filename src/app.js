import express from "express";
import dotenv from "dotenv";
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
  try {
    const result = await pool.query("SELECT * FROM USERS");
    return res
      .status(200)
      .json({ message: "Api requests!", users: result.rows });
  } catch (error) {
    console.error("Database query error:", error);
    return res.status(500).json({ message: "Database query error", error });
  }
});

app.listen(3000);
