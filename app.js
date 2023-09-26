import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connectToDatabase } from "./src/Databases/mongo.js";
import router from "./src/routes/routes.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file if available

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;

// Start the server and connect to the database

try {
	await connectToDatabase();
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
	console.log("Connected to the database");
} catch (error) {
	console.error("Error connecting to the database:", error);
	process.exit(1); // Exit the application on database connection failure
}
