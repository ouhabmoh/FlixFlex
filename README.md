# FLIXFLEX Backend

FlixFlex Backend is the robust and efficient RESTful API and database backend that powers the FlixFlex web application—a platform designed for movie and series enthusiasts. It facilitates a seamless user experience by offering a wide range of features, including user registration, movie and series listings, favorites management, search capabilities, and comprehensive movie/series details.

## Table of Contents

-    [Introduction](#introduction)
-    [Technologies Used](#technologies-used)
-    [Installation](#installation)
-    [Database Setup](#database-setup)
-    [Configuration](#configuration)
-    [Usage](#usage)
-    [Authentication](#authentication)
-    [API Documentation](#api-documentation)

## Introduction

FlixFlex API simplifies the task of managing users and their favorites and discover movies and series.
**Key Features:**

-    User Registration: Users can create accounts with unique usernames and secure passwords.
-    Movie and Series Listings: Browse through an extensive library of movies and series on dedicated pages.
-    Top 5 Recommendations: Discover the top 5 movies and series in a special section.
-    Batched Viewing: Access movies and series in batches of 10 for easier navigation.
-    Favorites Management: Add or remove movies and series from your favorites list.
-    Favorite List: View your list of favorite movies and series.
-    Search Functionality: Easily find movies and series using the search feature.
-    Detailed Information: Access comprehensive details about movies and series.
-    Watch Trailers: Watch trailers for movies and series.

## Technologies Used

-    Node.js: The server-side runtime environment.
-    Express.js: A fast, unopinionated, and minimalist web framework for Node.js.
-    MongoDB: A NoSQL database for storing product, purchases, users and category data.
-    Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
-    Passport.js: Authentication middleware for Node.js.
-    The Movie Database (TMDB) API: The datasource for the movies and series.

## Installation

To set up the Product Management API locally, follow these steps:

1. **Clone the GitHub repository:**

     ```bash
     git clone https://github.com/yourusername/FlixFlex.git
     ```

2. **Navigate to the project directory:**

     ```bash
     cd Flix-Flex-api
     ```

3. **Install dependencies:**

```bash
npm install
```

## Database Setup

This API uses MongoDB as its database. You can configure the database connection in the .env file. Ensure you have a MongoDB instance running.

**Configuration**

To configure the API for your development environment, create a `.env` file in the project root directory if it doesn't already exist, and include the following environment variables:

```dotenv
# Development Environment Variables

# Server settings
DEV_SERVER_PORT=your server port
DEV_SERVER_HOST=your server
NODE_ENV=your_environment

# Database URL
DEV_DATABASE_URL=your_database_url

# JWT
JWT_SECRET_KEY=your_secret_key
TOKEN_EXPIRATION_TIME=your_token_exppiration_time
# MovieDB API Key
MOVIE_DB_KEY=your_api_key
```

## Run the Project:

Start the API server by running the following command:

```bash

npm start
```

The API server will start, and you'll see log messages indicating that the server is running. By default, it will run on http://localhost:PORT, but you can adjust the port and other settings in your .env file.

**Access the API:** You can now access the API by opening a web browser or using a tool like Postman to send HTTP requests to the endpoints. Refer to the API Documentation section for detailed instructions on how to use the API.

## Usage

Refer to the API Documentation section for detailed usage instructions, including example requests and responses.

## Authentication

To access certain endpoints, authentication is required. Follow the API Documentation to learn how to authenticate with the API.

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://documenter.getpostman.com/view/26170600/2s9YJZ55Ma).
