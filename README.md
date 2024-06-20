# Overview

This is a basic monorepo containing the 3 projects listed below:

* backend - Express app used to access and mock the API.
* frontend - React app.
* shared - shared items of code.

## Backend

The backend is an express app that mainly serves as a means to keep
our api ID secret and to let us use a mock api so we don't burn 
through the 500 free api requests.

## Frontend 

This is the frontend part of the assignment. As requested it is a React + TypeScript app created with Vite.

Main features:
* Infinite scroll triggered every 10 posts
* Responsive layout

## Shared

This project contains (potentially) shared items of code.

# Running Instructions

The application consists of a React app on the frontend and an express app on the backend.

Both will the backend and frontend will need to be running for successful use.

Complete run instructions can be found below

1. cd to the shared project directory and run `npm install` and then `npm run build`
2. cd to the backend project directory.
3. Create a .env file in the backend directory containing the following. 
```
mock=false #This controls whether or not the app uses the API or the mocked data.
appId=<insert app-id here>
apiUrl=https://dummyapi.io/data/v1
``` 
4. Run `npm install` on the command line
5. Run `npm run dev` on the command line to start the dev server. The api should now be accessible via http://localhost:3000/posts?page=0&limit=10
6. cd to the frontend project directory.
7. Create a .env file in the frontend directory containing the following. 
```
VITE_API_URL=http://localhost:3000
```  
8. Run `npm install` on the command line
9. Run `npm run dev` on the command line to start the dev server. The frontend app should now be accessible via the following URL: http://localhost:5173/
