import express from "express";
import { users } from "./data.js";

const app = express();

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
