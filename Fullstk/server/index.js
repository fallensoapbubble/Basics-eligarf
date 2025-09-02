import express from "express";
import cors from "cors";
import connectDB from "../server/configDB/db.js";
import familyRoutes from "../server/routes/familyRoutes.js"
import pictureRoutes from "../server/routes/pictureRoutes.js"
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // will serve uploaded files later


//connect mongo
connectDB();





// quick health route to verify server runs
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


// routes

app.use("/api/family", familyRoutes);
app.use("/api/picture", pictureRoutes); 




app.listen(8080, () => {
  console.log("---------- \t Server running at http://localhost:8080  \t----------\n\n");
});
