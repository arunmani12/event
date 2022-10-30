import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {

    try {
        
       let user =await User.find({})

       let mNumber = user[0].planId


       for(let u of user){

         if(u.planId>mNumber){

            mNumber = u.planId

        }

       }

       console.log(mNumber)


       res.status(200).json({message: "Success!"});
       

    } catch (error) {

        console.log(error)
        
        res.status(403).json({ message: "no!"});

    }

}