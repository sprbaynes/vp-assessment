import { Owner } from '../owner';
export interface Post {
    id: string;
    image: string;
    likes: number;
    tags: string[];
    text: string;
    publishDate: string;
    updatedDate: string;
    owner: Owner;
}
