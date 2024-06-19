jest.mock('../../mock/api/posts', ()=>{
    return {
        get: jest.fn(()=>{
            return Promise.resolve({
                data:[],
                total:0,
                page:0,
                limit:5
            });
        })
    };
});

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({
            data:[],
            total:0,
            page:0,
            limit:5
        }),
    });
}) as jest.Mock;

import {posts} from '../../services';
import {get as mockGet} from '../../mock/api/posts';

test('Service switches correctly to mock api', async ()=>{
    process.env = {
        ...process.env,
        mock:'true',
        apiUrl: 'fakeURL',
        appId: '1234'
    };
    
    posts.get({page:0, limit:5});

    expect(mockGet).toHaveBeenCalledTimes(1);
});

test('Service switches correctly to real api', async ()=>{
    process.env = {
        ...process.env,
        mock:'false',
        apiUrl: 'fakeURL',
        appId: '1234'
    };
    
    posts.get({page:0, limit:5});

    expect(fetch).toHaveBeenCalledTimes(1);
});