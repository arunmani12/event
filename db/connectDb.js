import mongoose from "mongoose";

let DB_URL="mongodb+srv://arunmani:9787480892@cluster0.o9yhm.mongodb.net/event?retryWrites=true&w=majority"


function dbConnect() {
     mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
  // mongoose.connect("mongodb://localhost:27017/event", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .then(()=>{
    console.log('DATA BASE CONNECTED')
  })
  .catch(err=>{
    console.log(err)
    process.exit(1);
  });

}

export default dbConnect;
