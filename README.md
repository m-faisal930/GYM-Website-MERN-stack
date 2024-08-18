# MERN Stack Gym Website

## Overview

This is a full-featured gym website built using the MERN stack (MongoDB, Express, React, Node.js). It offers user authentication, membership management, booking system, profile management, and an admin dashboard.


## Technologies Used

- **Frontend:** React, Redux, Axios, React Router, React-Bootstrap
- **Backend:** Node.js, Express, MongoDB, Bcrypt
- **Other:** Cloudinary, Heroku/Vercel, MongoDB Atlas, Postman

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Backend Setup

1. Clone the repository and navigate to the `backend` directory:
   ```bash
   git clone https://github.com/your-username/gym-website.git
   cd gym-website/backend
2. Install dependencies:
npm install
3. Create a .env file in the backend directory:
          PORT=5000
          MONGO_URI=your_mongodb_uri
          JWT_SECRET=your_jwt_secret
          CLOUDINARY_CLOUD_NAME=your_cloud_name
          CLOUDINARY_API_KEY=your_api_key
          CLOUDINARY_API_SECRET=your_api_secret
4. Start the backend server:
npm start
### Frontend Setup
1. Navigate to the frontend directory:
cd ../frontend
2. Install dependencies:
npm install
3. Create a .env file in the frontend directory:
REACT_APP_API_URL=http://localhost:5000
4. Start the frontend server:

npm start
###Running the project
Backend: http://localhost:4000
Frontend: http://localhost:5173
