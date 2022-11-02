import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {

    try {
        
       await User.deleteMany({ planId: [176, 117, 118,119,138,139,140] });

       res.status(200).json({message: "Success!"});
       

    } catch (error) {

        console.log(error)
        
        res.status(403).json({ message: "no!"});

    }

}