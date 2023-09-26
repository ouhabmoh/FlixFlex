import { MovieDb } from "moviedb-promise";
import dotenv from "dotenv";

dotenv.config();

// Initialize MovieDB with your API key
const moviedb = new MovieDb(process.env.MOVIE_DB_KEY);

export default moviedb;
