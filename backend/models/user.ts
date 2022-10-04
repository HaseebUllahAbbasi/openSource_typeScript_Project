import {Schema,model,Document} from "mongoose";

export interface UserDocument extends Document
{
  name: String;
  lastName :String;
  

}


interface User{
  name: String;
  lastName: String
}
const schema  = new Schema<User>({
  name:{
    type:String,
    required: [true,"please Enter Name"]
  },
  lastName:{
    type:String,
    required: [true,"please Enter Last Name"]
  },
})
const UserModel = model<User>('User',schema) ;

export default UserModel;