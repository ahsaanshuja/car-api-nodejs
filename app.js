import express, { json } from "express";
import carRoutes from "./routes/carRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";

const app = express();

app.use(json());

app.use("/cars", carRoutes);

app.use(errorHandler);

export default app;
