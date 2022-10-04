import   {Request,Response} from 'express'


const TestData = (req:Request, res: Response): void=> 
{
  
  res.json({
    success: true,
    message: "Home "
  })
}
export 
{
  TestData
}