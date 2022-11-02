import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { verify } from "jsonwebtoken";

dbConnect();

const secret = "arunmani";


export default async function handler(req, res) {
  try {

    const jwt = req.headers.authorization

    const dataFromToken = verify(jwt, secret);


    const email = dataFromToken.email;

    console.log(email)

    if(email!=='arunmani.admin@gmail.com'){
      return res.status(401).json({ message: "no bro" });
    }

   
    const user = await User.find({});

   

    if (!(user.length > 0)) {
      return res.status(401).json({ message: "something went to wrong" });
    }

    return res.status(401).json({user });

  } catch (e) {
    console.log(e)
    res.status(401).json({ message: "something wrong" });
  }
}
