import Joi from "joi";

export const familyValidation = Joi.object({
  relationship: Joi.string().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().allow(""), // optional
  surname: Joi.string().required(),
  status: Joi.string().valid("living", "deceased").required(),
  birthDate: Joi.date().optional(),
  birthPlace: Joi.string().allow(""),
  currentPlace: Joi.string().allow(""),
  profilePicture: Joi.string().allow(""),

  
});
