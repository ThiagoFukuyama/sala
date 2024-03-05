import express from "express";
import dotenv from "dotenv";

import { apiRouter } from "./routes/api";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
   res.send(`Fala rapeeeize`);
});
