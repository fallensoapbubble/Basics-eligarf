const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/elig", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
         process.exit(1);
  }
};




const chapterRoutes = require("./routes/chap.js")

app.use("/api", chapterRoutes);

app.get("/",(req,res)=>{
    res.send("home")
})


var PORT = 8080;

app.listen(PORT, () => {
   connectDB(); 
  console.log(`Server is running on port: http://localhost:${PORT}`);
});