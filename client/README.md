# Staff Management Application

Staff is a web application for managing employee data, built using the MERN stack (MongoDB, Express, React, Node.js). The application allows authorized users to add, delete, and edit employee records.

# Technologies
# Client (Frontend)
Developed using the following technologies:

            {
              "name": "client",
              "private": true,
              "version": "0.0.0",
              "type": "module",
              "scripts": {
                "dev": "vite",
                "build": "tsc -b && vite build",
                "lint": "eslint .",
                "preview": "vite preview"
              },
              "dependencies": {
                "@ant-design/icons": "^5.4.0",
                "@reduxjs/toolkit": "^2.2.7",
                "antd": "^5.20.6",
                "react": "^18.3.1",
                "react-dom": "^18.3.1",
                "react-icons": "^5.3.0",
                "react-redux": "^9.1.2",
                "react-router-dom": "^6.26.2",
                "redux": "^5.0.1",
                "sass": "^1.78.0"
              },
              "devDependencies": {
                "@vitejs/plugin-react": "^4.3.1",
                "eslint": "^9.9.0",
                "typescript": "^5.5.3",
                "vite": "^5.4.1"
              }
            }

# The client-side uses:

  React for building the user interface.
  
  Ant Design for faster UI component development.
  
  Redux Toolkit for managing application state.
  
  Sass for styling.

# Server (Backend)

The backend is built with the following technologies:

      {
        "name": "staff",
        "version": "0.0.0",
        "private": true,
        "scripts": {
          "start": "node ./bin/www",
          "server": "nodemon ./bin/www",
          "client": "npm run dev --prefix ../client",
          "dev": "concurrently \"npm run server\" \"npm run client\""
        },
        "dependencies": {
          "@prisma/client": "^5.19.1",
          "bcrypt": "^5.1.1",
          "cors": "^2.8.5",
          "express": "^5.0.0",
          "jsonwebtoken": "^9.0.2",
          "morgan": "~1.9.1"
        },
        "devDependencies": {
          "concurrently": "^9.0.0",
          "nodemon": "^3.1.4",
          "prisma": "^5.19.1"
        }
      }
      
# The server-side uses:

  Express for handling HTTP requests.
 1. Prisma for database management.
 2. JWT for authentication.
 3. Bcrypt for password hashing.
  

# Features

Authentication: User login with JWT tokens.

<img width="700" alt="staff-login" src="https://github.com/user-attachments/assets/b83fffe5-e0ab-470a-9100-6c2bcaaa0ae5">




Employee Management: Ability to add, edit, and delete employee records.



<img width="700" alt="staff-home" src="https://github.com/user-attachments/assets/e47aa743-9e11-46cd-81a9-0a8cdc2adf00">

# Running in Development Mode

  1.Clone the repository

    git clone https://github.com/your-repo/staff.git

2. Navigate to the client and server folders, and install dependencies as described above.
3. Use the npm run dev command in the root directory to run both the server and client simultaneously


# Deployment

Client (Frontend)
The client-side is deployed on Vercel. For local development:

1. Install dependencies:

        cd client
        npm install


2. Run the project:
   
       npm run dev

# Server (Backend)

The backend is deployed on Render. For local development:

1. Install dependencies

         cd server
         npm install

2. Start the server

         npm run dev


# Hosting

  Client-side: Vercel 
  Server-side: Render 


