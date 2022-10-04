import   {Request,Response} from 'express'
import UserModel from '../models/user'
import { createUser, deleteUser, findAndUpdate, findUser } from '../services/user.services';


const GetAllUsersData =  async(req:Request, res: Response) => 
{
  const allUsers = await UserModel.find();
  res.status(200).json({
    succes: true,
    allUsers: allUsers
  })
}


const TestData = (req:Request, res: Response): void=> 
{
  
  res.json({
    success: true,
    message: "Home "
  })
}

export 
{
  TestData,
  GetAllUsersData
}
