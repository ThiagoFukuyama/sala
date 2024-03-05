import express from "express";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.send(`Fala rapeeeize`);
});
