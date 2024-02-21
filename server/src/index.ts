import express from "express";
import dotenv from "dotenv";

import { glenn } from "./glenn";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
   res.send(`Fala rapeeeize ${glenn}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
