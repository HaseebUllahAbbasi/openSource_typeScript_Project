import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

const app = express()

const port = config.get<number>('port');

app.listen(port, async ()=>
{
  await connect();
  logger.info(`Server Started on ${port}`);
})