const mongoose =require('mongoose')

const connectDB= async ()=> {
    try{
        // const conn=await mongoose.connect("mongodb+srv://Nuha:nuhafour@turfcluster.6mdsi.mongodb.net/Turf-api?retryWrites=true&w=majority")
        const conn=await mongoose.connect("mngodb+srv://Nuha:Nuha@cluster0.yyzbd.moongodb.net/TrufDb?retryWrites=true&w=majority")

        console.log(`MongoDB Connected:${conn.connect.host}`.cyan.underline);
    }catch (error){
        console.log("error from mongodb")
        console.log(error);
        process.exit(1)

    }
}

module.exports = connectDB