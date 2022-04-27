import express from "express";
import { initDB } from "./database";

export const app = express();

app.use(express.json());

initDB();
