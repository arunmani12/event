import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import Razorpay from "razorpay";
import shortid from 'shortid'


dbConnect();
const secret = "arunmani";

const razorpay = new Razorpay({
  key_id: "rzp_test_DyO1hiZxeHObP6",
  key_secret: "0htjDY4Pzz60X4Iw5Bi1CGle",
});

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {

      const payment_capture = 1
	 
	  const currency = 'INR'

      const plan = req.body.plan

      let amount = 210

      if(plan === 'basic'){
        amount = 110
      }

      const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
          ...req.body,
        }
       }
 
        const response = await razorpay.orders.create(options)

        res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	

    } catch (e) {
      res.status(401).json({ message: "something went to wrong" });
    }
  }
}
