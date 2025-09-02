import mongoose from "mongoose";

const familySchema = new mongoose.Schema({
  relationship: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String },
  surname: { type: String, required: true },
  status: { type: String, enum: ["living", "deceased"], default: "living" },
  birthDate: { type: Date },
  birthPlace: { type: String },
  currentPlace: { type: String },
  profilePicture: { type: String }, // will hold uploaded image path
});

const FamilyMember = mongoose.model("FamilyMember", familySchema);

export default FamilyMember;
