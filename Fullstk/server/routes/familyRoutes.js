// THIS IS FOR /api/famliy


import express from "express";
//JOI VALIDATION HERE
import { familyValidation } from "../validations/familyValidation.js";
// MONGOOSE SCHEMA HERE
import FamilyMember from "../model/FamilyMember.js";

const router = express.Router();


export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((e) => e.message) });
  }

  next();
};


// create family member
router.post("/", validate(familyValidation), async (req, res) => {
  try {
    const member = await FamilyMember.create(req.body);
    res.status(201).json({ message: "✅ Family member added", member });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// get all family members
router.get("/", async (req, res) => {
  try {
    const members = await FamilyMember.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
