import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: { 
        type: String,
        require: true
    },
    authentication: {
        password: {
            type: String,
            require: true,
            select: false
        },
        salt: {
            type: String,
            select: false
        },
        sessionToken: {
            type: String,
            select: false
        }
    }
})

export const userModel = mongoose.model('users', UserSchema)

export const getUser = () => userModel.find()
export const getUserEmail = (email: string) => userModel.findOne({ email })
export const getUserSession = (sessionToken: String) => userModel.findOne({
    'authentication.sessionToken': sessionToken,
})
export const getUserId = (id: String) => userModel.findById(id)
export const createUser = (value: Record<string, any>) => new userModel(value)
  .save()
  .then((user)=>user.toObject())
export const deleteUser = (id:String)=>userModel.findOneAndDelete({_id:id})
export const updateUser = (id:String,values:Record<string,any>)=>userModel.findByIdAndUpdate(id,values)