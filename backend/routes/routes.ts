import  express, {Request,Response} from 'express'
import { TestData } from '../controllers/user';
const router = express.Router();

router.get('/home', TestData)

router

export {
  router
}