import {PostsParams} from 'shared/dist/api'
import {get as mockGet} from '../../mock/api/posts'

export async function get(params:PostsParams)
{
    console.log(process.env)
    if(process.env.mock === 'true')
    {
        console.log('Using mock api')
        try{
            const mockData = await mockGet(params);    
            return mockData;
        }
        catch(err)
        {
            console.error('Failed to get mock post data',err)
        }
    }

    throw Error('Non mock data call not implemented yet')

}