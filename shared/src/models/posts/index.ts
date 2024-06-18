import {Post} from '../post'

export interface Posts {
    data: Post[];
    total: number;
    page: number;
    limit: number;
}