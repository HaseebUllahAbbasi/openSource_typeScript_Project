import mongoose from "mongoose";
function connect ()
{
  console.log("connecting db")
  return mongoose.connect('mongodb://localhost:27017/dot_db_typescript').then(
    ()=>
    {
      console.log("db conncted with ")
    }
  ).catch(e=> console.log("error in db Connection",e));
}
export {
  connect
}