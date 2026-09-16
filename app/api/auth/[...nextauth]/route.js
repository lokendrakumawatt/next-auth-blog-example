import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { userInfo } from "@/app/sever-actions/action2";
import { userInfoStore } from "@/app/sever-actions/action2";
const handler = NextAuth({
    providers:[
        GoogleProvider({clientId:process.env.GOOGLE_ID , clientSecret:process.env.GOOGEL_SECRET})
    ],
    callbacks:{
        async signIn({user , account}){
            const a = await userInfo(user.email);
            if(!a){
               
                await userInfoStore({name:user.name , image:user.image , email:user.email ,provider:account.provider})
            } 
            return true;
        }   
    }
})
export {handler as GET , handler as POST}