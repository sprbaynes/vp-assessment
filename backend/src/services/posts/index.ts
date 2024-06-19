import {PostsParams} from 'shared/dist/api';
import {get as mockGet} from '../../mock/api/posts';

export async function get(params:PostsParams)
{
    if(process.env.mock === 'true')
    {
        console.log('Using mock api');
        
        const mockData = await mockGet(params);    
        return mockData;
    }

    const {page,limit} = params;

    const headers = new Headers();

    headers.append('app-id', (process.env.appId)?process.env.appId:'');

    const res = await fetch(`${process.env.apiUrl}/post?page=${page?page:''}&limit=${limit?limit:''}`,{
        method: 'GET',
        headers
    });
    
    return res.json();
}