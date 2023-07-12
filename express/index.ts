import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  console.log("req", req)
  res.send("Express + TypeScript Server");
});

app.get("/app", (req: Request, res: Response) => {
  console.log("req", req)
  res.send("Express + TypeScript Server");
});

app.get("/hello", (req: Request, res: Response) => {
  console.log("req", req)
  res.send("Express + TypeScript Server, hello leapcell.io");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
