import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { verify } from "jsonwebtoken";

dbConnect();


export default async function handler(req, res) {
  try {

    const secret = "arunmani";

    const jwt = req.headers.authorization;

    const dataFromToken = verify(jwt, secret);

    const email = dataFromToken.email;

    const user = await User.find({ email });

    if (!user) {
      return res.status(401).json({ message: "something went to wrong" });
    }

    res.status(200).json({user});
  } catch (e) {
    res.status(401).json({ message: "no user to be found" });
  }
}
