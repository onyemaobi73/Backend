import express, { Application, Response, Request } from "express";
import cors from "cors";
import auth from "./Router/AuthRouter"
import task from "./Router/taskRouter"
import step from "./Router/stepRouter"
import progress from "./Router/progressRouter"

export const mainAPP = (app: Application) => {
  app
    .use(cors())
    .use(express.json())
    .use("/api/v1/auth", auth)
    .use("/api/v1/task", task)
    .use("/api/v1/step", step)
    .use("/api/v1/progress")

    .get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Awesome and good to Go!!!",
        });
      } catch (error) {
        res.status(404).json({
          message: "Error Found",
        });
      }
    });
};
