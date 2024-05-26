import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://aunglynn550:588584@ac-cosd1bh-shard-00-00.f4n4ouu.mongodb.net:27017,ac-cosd1bh-shard-00-01.f4n4ouu.mongodb.net:27017,ac-cosd1bh-shard-00-02.f4n4ouu.mongodb.net:27017/?ssl=true&replicaSet=atlas-13etz1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}