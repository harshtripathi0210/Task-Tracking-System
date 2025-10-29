import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://htripathi0210:taskflow2025@cluster0.u53nhob.mongodb.net/TaskFlow')
    .then (() => console.log('DB CONNECTED'));
}