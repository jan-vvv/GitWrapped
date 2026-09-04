const express= require("express");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.json({
        message: "GitWrapped Api is running !"
    });
});

app.use("/api/github", githubRoutes);

const PORT =5000;

app.listen(PORT,()=> {
    console.log(`GitWrapped server is running on port ${PORT}`);
});