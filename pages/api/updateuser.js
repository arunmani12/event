import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import crypto from "crypto";


dbConnect();


export default async function handler(req, res) {
    const filter = { email:'akshaya12@gmail.com' };
    const update = { events:[]};

    await User.findOneAndUpdate(filter, update, {
        new: true
    });
    res.status(401).json({ message: "okie" });

}