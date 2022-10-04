import  express, {Request,Response} from 'express'
import { GetAllUsersData, TestData } from '../controllers/user';
const router = express.Router();

router.get('/all', GetAllUsersData)

router

export {
  router
}