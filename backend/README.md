# Backend

## Overview

This is the backend part of the assignment. It is an express app that mainly serves 
as a means to keep our api ID secret and to let us use a mock api so we don't burn 
through the 500 free api requests.

## Running

Running the backend server is fairly straight forward. From the 'backend' directory execute the following steps:

1. Create a .env file in the backend directory containing the following. 
```
mock=false #This controls whether or not the app uses the API or the mocked data.
appId=<insert app-id here>
apiUrl=https://dummyapi.io/data/v1
```  
2. Run `npm install` on the command line
3. Run `npm run dev` on the command line to start the dev server

The api should now be accessible via http://localhost:3000/posts?page=0&limit=10