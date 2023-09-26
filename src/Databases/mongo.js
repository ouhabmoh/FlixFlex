// config/db.js
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment-specific variables from the .env file
dotenv.config();
// Function to connect to the database
async function connectToDatabase() {
	try {
		mongoose.connect(process.env.DEV_DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		process.exit(1); // Exit the application on connection error
	}
}

export { connectToDatabase };
