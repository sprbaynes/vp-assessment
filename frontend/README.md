# Frontend

## Overview

This is the frontend part of the assignment. As requested it is a React + TypeScript app created with Vite.

Main features:
* Infinite scroll triggered every 10 posts
* Responsive layout

## Running

To run the frontend dev environment please execute the following steps from the frontend directory:

1. Create a .env file in the frontend directory containing the following. 
```
VITE_API_URL=http://localhost:3000
```  
2. Run `npm install` on the command line
3. Run `npm run dev` on the command line to start the dev server.

The app should now be accessible via the following URL: http://localhost:5173/

Note: The backend express app will need to be running to see the output from the dummy posts api (see backend/README.md)

