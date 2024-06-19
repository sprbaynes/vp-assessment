import {Request, Response} from 'express';
import {posts} from '../../services';

export default async function (req: Request, res:Response){

    const pageQuery = (typeof req.query.page === 'string')? req.query.page : '';
    const limitQuery = (typeof req.query.limit === 'string')? req.query.limit : '';

    const pageQueryParsed = parseInt(pageQuery);
    const limitQueryParsed = parseInt(limitQuery);

    const page: number | undefined = (isNaN(pageQueryParsed))? undefined : pageQueryParsed;
    const limit: number | undefined = (isNaN(limitQueryParsed))? undefined : limitQueryParsed;
    
    let data;

    //Better error handling needed
    try{
        data = await posts.get({page,limit}); 
    }
    catch(err){
        console.error('Failed to get data from API',err);
    }

    return res.json(data);
}