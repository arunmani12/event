import dbConnect from "../../db/connectDb";
import Razorpay from "razorpay";
import shortid from 'shortid'


dbConnect();


const razorpay = new Razorpay({
  key_id: "rzp_live_hZtN2aKvtd1Z0i",
  key_secret: "aC7cE4t7CJXHEbltnMueDjUv",
});

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {

      const payment_capture = 1
	 
	  const currency = 'INR'

      let amount = 110

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
        console.log(response)

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
