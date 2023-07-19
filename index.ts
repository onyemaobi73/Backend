import express, { Application } from "express";
import { mainAPP } from "./mainApp";
import { db } from "./config/db";
import env from "dotenv"

env.config
const app: Application = express();

const port: any = process.env.PORT;

mainAPP(app)
const server = app.listen(process.env.PORT || port, () => {});

process.on("uncaughtException", (error: any) => {
  console.log("server is shutting down due to uncaughtException");
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is sutting down due to unhandledRejection");
  console.log(reason);

  server.close(() => {
    process.exit(1);
  });
});
