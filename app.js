import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import router from "./src/routes/userRoutes.js";

dotenv.config();
const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// database connect
connectDB()
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

// router handales
app.use("/api/v1",router)


// error handales 
app.use("*splat",(req,res)=>{
    res.status(404).json("Not found")
})

export default app