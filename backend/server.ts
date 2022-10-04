import express, {Request,Response} from "express";
import { connect } from "./db/db";
import {router} from './routes/routes'

const app = express();

connect()

app.use('/data',router);
app.get('/test',(req: Request,res: Response): void =>
{
  res.status(200).json({
    data:"dot test",
  })

})
const PORT = 4000;
app.listen(PORT, ()=>
{
  console.log(`Server Started on PORT : ${PORT}`);

})