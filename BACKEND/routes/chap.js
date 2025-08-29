const express = require("express");
const router = express.Router();
const Chapter = require("../schema.js"); // Import the Chapter model

//QUES2 Create a story api , Define all variables in req.body , and throw error if any req.body validation fails.(check existing api used)
//QUES 3 Create Post api to create a chapter using mongoose


router.get("/", (req, res) => {
  res.json({ status: "ok", message: "health check" });
});



router.post("/chapters", async (req, res) => {
  //QUES 2 --------




  // destructure all expected variables from the request body
  const {
    EventTitle: reqEventTitle,
    description: reqDescription,
    eventDate: reqEventDate,
    userId: reqUserId,
    location: reqLocation,
    CD_Flag: reqCD_Flag,
    isStory: reqIsStory,
    isEvent: reqIsEvent,
    contents: reqContents,
  } = req.body;





  // Perform Validation: Check if required fields are present and not empty.
  // Mongoose's 'required' validator handles this automatically on save,
  // but a manual check provides clearer, immediate feedback.
  if (!reqEventTitle || !reqDescription || !reqEventDate || !reqUserId) {
    return res.status(400).json({
      success: false,
      message:
        "Validation failed. Please provide EventTitle, description, eventDate, and userId.",
    });
  }




  //QUES 3 ---------

  try {
    //  a new chapter instance using the Chapter model
    const newChapter = new Chapter({
      EventTitle: reqEventTitle,
      description: reqDescription,
      eventDate: reqEventDate,
      userId: reqUserId,
      location: reqLocation,
      CD_Flag: reqCD_Flag,
      isStory: reqIsStory,
      isEvent: reqIsEvent,
      contents: reqContents,
    });

    // save the new chapter to the database
    // If any 'required' fields are missing, Mongoose will throw an error here which is caught by the catch block.
    const savedChapter = await newChapter.save();




    // Send a success response with the created data
    res.status(201).json({
      success: true,
      message: "Chapter created successfully! ",
      data: savedChapter,
    });
  } catch (error) {
    // Handle potential errors from the database (e.g., validation errors)
    res.status(400).json({
      success: false,
      message: "Failed to create chapter.",
      error: error.message,
    });
  }
});



//QUES 4
router.put("/chapters/:id", async (req, res) => {
  try {
    // find the chapter by its ID and update it with the request body's data
    const updatedChapter = await Chapter.findByIdAndUpdate(
      req.params.id, // The ID of the document to find, taken from the URL
      req.body, // The new data to apply to the document
      {
        new: true, // This option returns the modified document instead of the original one
        runValidators: true, // This ensures that updates adhere to the schema's validation rules
      }
    );

    // check if a chapter was found and updated
    if (!updatedChapter) {
      // If no document matches the ID, return a 404 Not Found error
      return res.status(404).json({
        success: false,
        message: "Chapter not found with this ID.",
      });
    }

    // send a success response with the updated chapter data
    res.status(200).json({
      success: true,
      message: "Chapter updated successfully! ",
      data: updatedChapter,
    });
  } catch (error) {
    // Handle potential errors, such as an invalid ID format or validation failure
    res.status(400).json({
      success: false,
      message: "Failed to update chapter.",
      error: error.message,
    });
  }
});

//QUES5
// .sort({ createdAt: -1 }): This is an optional but common addition. It sorts the results to show the most recently created chapters first.
router.get("/chapters", async (req, res) => {
  try {
    // Use the .find() method on the model to get all documents
    // Passing no arguments to find() means "match all documents"
    const chapters = await Chapter.find().sort({ createdAt: -1 }); // .sort() is optional

    // Send a success response with the list of chapters
    res.status(200).json({
      success: true,
      count: chapters.length,
      data: chapters,
    });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

//QUES 5
//SIMPLE FIND BY ID

router.get("/chapters/:id", async (req, res) => {
  try {
    // 1. Use findById() to find a single document by its _id
    const chapter = await Chapter.findById(req.params.id);

    // 2. If no chapter is found with that ID, return a 404 error
    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: "Chapter not found with this ID.",
      });
    }

    // 3. If found, send a success response with the chapter data
    res.status(200).json({
      success: true,
      data: chapter,
    });
  } catch (error) {
    // Handle errors, such as an invalid ID format
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
