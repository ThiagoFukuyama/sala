import express from "express";
import dotenv from "dotenv";

import { apiRouter } from "./routes/api";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiRouter);

app.use(notFound);
app.use(errorHandler);
