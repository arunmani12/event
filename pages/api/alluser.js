import dbConnect from "../../db/connectDb";
import User from "../../models/User";
// import { verify } from "jsonwebtoken";

dbConnect();


export default async function handler(req, res) {
  try {

   
    const user = await User.find({});

   

    if (!(user.length > 0)) {
      return res.status(401).json({ message: "something went to wrong" });
    }

    return res.status(401).json({user });

    res.status(200).json({user});
  } catch (e) {
    res.status(401).json({ message: "no user to be found" });
  }
}
