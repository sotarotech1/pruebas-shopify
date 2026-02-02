import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import indexRouter from "./router/index.router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Server on PORT ${port}`);
});
