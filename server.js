import express from 'express'; // Import Express framework
import dotenv from 'dotenv'; // Import dotenv for environment variables
import posts from './routes/posts.js'; // Import posts routes
import logger from './middleware/logger.js'; // Import custom logger middleware
import errorHandler from './middleware/error.js'; // Import custom error handling middleware

dotenv.config(); // Load environment variables from .env file
const PORT = process.env.PORT || 5000; // Define the port


const app = express();  // Create an Express application

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory
app.use(logger); // Use the logger middleware
app.use(errorHandler); // Use the error handling middleware


// Route for posts
app.use('/api/posts', posts);

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 