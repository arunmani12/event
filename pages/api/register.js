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
      const { email, DOB, collegeName, Name } = req.body;

      const userIsThere = await User.find({ email });

      if (userIsThere.length>0) {
        return res.status(401).json({ message: "email is already there" });
      }

      if (!email || !DOB || !collegeName || !Name) {
        res.status(403).json({ message: "Please enter valid fields" });
      }

      const user = new User({
        ...req.body,
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
      res.status(401).json({ message: "something went to wrong" });
    }
  }
}
