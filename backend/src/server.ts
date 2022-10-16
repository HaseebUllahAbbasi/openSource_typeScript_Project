import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes/routes";


const app = express()
app.use(express.json())

const port = config.get<number>('port');

app.listen(port, async ()=>
{
  logger.info(`Server Started on ${port}, http://localhost:1337/`);
  await connect();
  routes(app);
})