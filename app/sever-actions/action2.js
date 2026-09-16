"use server"
import mongoose from "mongoose"

const schema = new mongoose.Schema({name:String , email:String , image:String , provder:String }) 
export async function userInfo(email){
if(mongoose.connection.readyState != 1){
    await mongoose.connect("mongodb://localhost:27017/GYM");
}
const a = mongoose.models.UserD || mongoose.model("UserD" ,schema);
const b = await a.findOne({email}).lean();
return b;
}
export async function userInfoStore(data){
if(mongoose.connection.readyState != 1){
    await mongoose.connect("mongodb://localhost:27017/GYM");
}
const a = mongoose.models.UserD || mongoose.model("UserD" ,schema);
 await a.insertOne(data);

}