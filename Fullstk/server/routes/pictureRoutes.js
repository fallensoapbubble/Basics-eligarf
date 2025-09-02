import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

// upload picture only
router.post("/", upload.single("picture"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = `/uploads/${req.file.filename}`;
    res.status(201).json({
      message: "✅ Picture uploaded successfully",
      filePath,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
