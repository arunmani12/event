import dbConnect from "../../db/connectDb";
import User from "../../models/User";
dbConnect();


export default async function handler(req, res) {

    try{

    const { email, DOB } = req.body;

    const number = req.body.number

    const filter = { email,DOB };
 
    const update = { number};

    await User.findOneAndUpdate(filter, update, {
        new: true
    });
    res.status(200).json({ message: "okie" });

    }
    catch(e){
        console.log(e)
        res.status(403).json({ message: "something went to wrong" });
    }

}