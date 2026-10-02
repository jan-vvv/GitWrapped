require("dotenv").config();


const express= require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const githubRoutes = require("./routes/githubRoutes");
const wrappedRoutes = require("./routes/wrappedRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

app.get("/",(req,res)=>{
    res.json({
        message: "GitWrapped Api is running !"
    });
});

app.use("/api/github", githubRoutes);
app.use("/api/wrapped", wrappedRoutes);

const PORT =5000;

app.listen(PORT,()=> {
    console.log(`GitWrapped server is running on port ${PORT}`);
});

