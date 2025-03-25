# React Posts App

This is a simple React application that fetches and displays a list of posts from an external API (JSONPlaceholder). Users can view a list of posts and click on a post to see its full details.

## Features
- Fetches and displays the latest posts from an API.
- Shows a loading spinner while fetching data.
- Displays error messages if fetching fails.
- Uses React Router for navigation between the post list and post details.
- Styled with Bootstrap for a responsive layout.

## Installation

### Prerequisites
- Node.js installed
- npm or yarn installed

### Steps to Run the Project
1. Clone the repository:
   
   git clone https://github.com/Shaik0233/myproject/tree/master
   
   
2. Install dependencies:
   
   npm install
   
3. Start the development server:

   npm start

4. Open the app in your browser at:
   
   http://localhost:3000
   


## API Used
The app uses the **JSONPlaceholder API**:
- Fetch all posts: `https://jsonplaceholder.typicode.com/posts?_limit=10`
- Fetch a single post: `https://jsonplaceholder.typicode.com/posts/{id}`

## Dependencies
- **React** - JavaScript library for building UI
- **React Router** - For handling navigation
- **Axios** - For making API requests
- **Bootstrap** - For styling and responsive layout

