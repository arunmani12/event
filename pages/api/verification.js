import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import crypto from "crypto";


dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      const shasum = crypto.createHmac("sha256", secret);
      shasum.update(JSON.stringify(req.body));
      const digest = shasum.digest("hex");

      if (digest === req.headers["x-razorpay-signature"]) {
        const notes = req.body.payload.payment.entity.notes;

        const orderId = req.body.payload.payment.entity.order_id;

        const filter = { email:notes.email };
        const update = { plan: notes.plan ,orderId:orderId};

        await User.findOneAndUpdate(filter, update, {
            new: true
        });

      } else {
        // pass it
      }
    } catch (e) {
        console.log(e)
    }
  }
  res.json({ status: "ok" });
}
