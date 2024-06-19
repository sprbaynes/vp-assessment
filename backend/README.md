# Backend

## Overview

This is the backend part of the assignment. This mainly serves as a means to keep our api ID secret and
to let us use a mock api so we don't burn through the 500 free api requests.

## Running

Running the backend server is fairly straight forward. From the 'backend' directory execute the following steps:

1. Create a .env file in the backend directory containing the following. 
```
mock=false
appId=<insert app-id here>
apiUrl=https://dummyapi.io/data/v1
```  
2. Run `npm install` on the command line
3. Run `npm run dev` on the command line to start the dev server

