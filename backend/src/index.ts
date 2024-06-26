// src/index.ts
import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import PostController from './controllers/posts';

dotenv.config();

const app: Express = express();
app.use(cors());
const port = 3000;

app.get('/posts', PostController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});