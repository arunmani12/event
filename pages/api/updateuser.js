import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import crypto from "crypto";


dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {
    const filter = { email:'akshaya12@gmail.com' };
    const update = { plan: 'pro',orderId:'order_KU3FmN6nyR2si7'};

    await User.findOneAndUpdate(filter, update, {
        new: true
    });
    res.status(401).json({ message: "okie" });

}