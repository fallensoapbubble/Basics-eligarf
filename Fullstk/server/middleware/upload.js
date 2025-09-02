import multer from "multer";
import path from "path";

const storage = multer.diskStorage({ //DEF HOW WHERE PIC STORED
  destination: (req, file, cb) => { //DEST OF FOLDER FOR PIC
    cb(null, "uploads/"); //SET DEST TO THIS
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

// file filter (only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png allowed!"), false);
  }
};

// MIME type is a way to describe the nature and format of a file

/*

type/subtype
For example:

image/jpeg → a JPEG image

application/json → a JSON file

text/html → an HTML document
*/

const upload = multer({ storage, fileFilter });

export default upload;
