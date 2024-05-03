import mongoose from "mongoose"


export const connectDB = async () => {
 await mongoose.connect(process.env.DB_LINK).then(()=>{
    console.log('Db Connected');
  })
  .catch((err)=>{
    console.log(err, "Error in Db connection");
  })
}