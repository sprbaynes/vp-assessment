import {readFile} from 'fs/promises';
import {join} from 'path';
import { PostsParams } from 'shared/dist/api';
import {Post, Posts} from 'shared/dist/models';

export async function get(params:PostsParams):Promise<Posts>{
    console.log("mock api get data");
    //read file in
    const {page,limit} = params;
    const pageValid = validatePageParam(page);
    const limitValid = validateLimitParam(limit);
    const postDataPath = join(__dirname,'..','..','data','posts.json');
    const postsJson: string = await readFile(postDataPath, {encoding:'utf8'});
    const posts: Post[] = JSON.parse(postsJson);

    const startIndex = calculateStartIndexFromParams(pageValid,limitValid);
    const endIndex = calculateEndIndexFromParams(pageValid,limitValid);

    const postsResponse: Posts = {
        data: posts.slice(startIndex,endIndex),
        page: pageValid,
        limit: limitValid,
        total: posts.length
    };

    return postsResponse;
}

export function validatePageParam(page: number | undefined | null ):number{
    page = (!page || page < 0)? 0 : page;
    page = (page > 999)? 999 : page;
    return page;
}

export function validateLimitParam(limit: number | undefined | null):number{
    limit = (!limit || limit < 0)? 20 : limit;
    limit = (limit < 5)? 5 : limit;
    limit = (limit > 50)? 50 : limit;
    return limit;
}

export function calculateStartIndexFromParams(page:number, limit:number)
{
    return page * limit;
}

export function calculateEndIndexFromParams(page:number, limit:number)
{
    return calculateStartIndexFromParams(page,limit) + limit;
}

