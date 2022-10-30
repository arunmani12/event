import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";


dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      const { email, DOB, collegeName, Name,number } = req.body;

      const userIsThere = await User.find({ email });


      if (userIsThere.length>0) {
        return res.status(401).json({ message: "email is already there" });
      }

      if (!email || !DOB || !collegeName || !Name || !number) {
        return res.status(403).json({ message: "Please enter valid fields" });
      }

      var users = await User.find();

      let mNumber = users[0].planId


      for(let u of users){

        if(u.planId>mNumber){

           mNumber = u.planId

       }

      }


      
      const user = await new User({
        ...req.body,
        planId:mNumber + 1
      });


      await user.save();

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          email,
        },
        secret
      );

      const serialised = serialize("OursiteJWT", token, {
        secure: false,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialised);

      res.status(200).json({ user ,message: "Success!"});
    } catch (e) {
      console.log(e)
      res.status(401).json({ message: "something went to wrong" });
    }
  }
}
