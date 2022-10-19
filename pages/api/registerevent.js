import dbConnect from "../../db/connectDb";
import User from "../../models/User";



dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {

    try{

    const { email, DOB } = req.body;

    const user = await User.findOne({ email, DOB });

    const event = req.body.event

    const filter = { email,DOB };

    const isFound = user.events.filter(d=>d===event)

    if(event==='De Paper Fest' ||event === 'Web Roar'){
        if(user.plan!=='pro'){
        return res.status(403).json({ message: "you don't have permission" });
        }
    }

    if(isFound.length){
        return res.status(403).json({ message: "already registered bro" });
    }

    if(user.events.length>=3){
        return res.status(403).json({ message: "sorry" });
    }

    const update = { events:[...user.events,event]};

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