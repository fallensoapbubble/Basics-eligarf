const express = require('express');
const router = express.Router();
const Chapter = require('./schema.js'); // Import your Chapter model


router.get('/chapters/:userId/:page', async (req, res) => {
    try {
        // --- 1. Get Parameters from URL ---
        const { userId, page } = req.params;
        const currentPage = parseInt(page) || 1;
        const limit = 10; // Number of chapters per page

        // --- 2. Calculate the Skip Value ---
        // This is the core of pagination.
        // Page 1: skips (1-1)*10 = 0 chapters.
        // Page 2: skips (2-1)*10 = 10 chapters.
        // Page 3: skips (3-1)*10 = 20 chapters.
        const skip = (currentPage - 1) * limit;

        // --- 3. Query the Database ---

        // First, get the total number of chapters for this user to calculate total pages
        const totalChapters = await Chapter.countDocuments({ userId: userId });

        // Now, fetch the specific page of chapters
        const chapters = await Chapter.find({ userId: userId }) // Filter chapters by the user ID
            .sort({ eventDate: -1 }) // Sort by event date, newest first
            .skip(skip)              // Skip the chapters from previous pages
            .limit(limit);           // Limit the result to 10

        // --- 4. Send the Response ---
        res.status(200).json({
            success: true,
            totalPages: Math.ceil(totalChapters / limit),
            currentPage: currentPage,
            chapters: chapters
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

module.exports = router;