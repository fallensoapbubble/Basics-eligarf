const mongoose = require('mongoose');

// Define the schema based on the provided JSON structure
const chapterSchema = new mongoose.Schema({
    EventTitle: {
        type: String,
        required: [true, 'EventTitle is required.'], // Mark as required with a custom error message
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A description is required.'],
        trim: true
    },
    eventDate: {
        type: Date,
        required: [true, 'The eventDate is required.']
    },
    userId: {
        type: String,
        required: [true, 'The userId is required.']
    },
    location: {
        type: String
    },
    CD_Flag: {
        type: Number,
        default: 1
    },
    isStory: {
        type: Boolean,
        default: false
    },
    isEvent: {
        type: Boolean,
        default: true
    },
    contents: {
        type: Array, // Defines 'contents' as an array
        default: []
    }
}, {
    // Automatically add 'createdAt' and 'updatedAt' timestamps
    timestamps: true
});

// Create and export the model
module.exports = mongoose.model('Chapter', chapterSchema);