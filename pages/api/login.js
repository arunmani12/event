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
      let { email, DOB } = req.body;
      const user = await User.findOne({ email, DOB });
      if (user) {
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

      }
      if (!user) {
        res.status(200).json({ data: "no user to be found" });
      }
    } catch (e) {
      res.status(401).json({ message: "no user to be found" });
    }
  }
}
