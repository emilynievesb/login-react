import express from "express";
import { initAPIRoutes } from "./routes/routes.js";
import cors from 'cors';

const app = express();

app.use(express.json()); //! Middleaware para leer json
app.use(cors())
app.use("/api", initAPIRoutes());

export default app;
