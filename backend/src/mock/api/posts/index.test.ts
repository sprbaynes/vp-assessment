import {readFile} from 'fs/promises';
import {join} from 'path';
import {get, validatePageParam,validateLimitParam, calculateStartIndexFromParams, calculateEndIndexFromParams} from './';
import {Post, Posts} from 'shared/dist/models'

test('mock api returns correct data', async ()=>{
    const postDataPath = join(__dirname,'..','..','data','posts.json');
    const postsJson: string = await readFile(postDataPath, {encoding:'utf8'});
    const posts: Post[] = JSON.parse(postsJson);

    const result = await get({page:0, limit:5})
    const expectedResult = posts.slice(0,5)

    expect(result.data).toEqual(expectedResult)
    expect(result.page).toEqual(0)
    expect(result.limit).toEqual(5)
    expect(result.total).toEqual(100)

    const result2 = await get({page:1, limit:5})
    const expectedResult2 = posts.slice(5,10)
    
    expect(result2.data).toEqual(expectedResult2)
    expect(result2.page).toEqual(1)
    expect(result2.limit).toEqual(5)
    expect(result2.total).toEqual(100)

    const result3 = await get({page:2, limit:5})
    const expectedResult3 = posts.slice(10,15)

    expect(result3.data).toEqual(expectedResult3)
    expect(result3.page).toEqual(2)
    expect(result3.limit).toEqual(5)
    expect(result3.total).toEqual(100)

    const result4 = await get({page:0, limit:20})
    const expectedResult4 = posts.slice(0,20)

    expect(result4.data).toEqual(expectedResult4)
    expect(result4.page).toEqual(0)
    expect(result4.limit).toEqual(20)
    expect(result4.total).toEqual(100)

    const result5 = await get({page:1, limit:20})
    const expectedResult5 = posts.slice(20,40)

    expect(result5.data).toEqual(expectedResult5)
    expect(result5.page).toEqual(1)
    expect(result5.limit).toEqual(20)
    expect(result5.total).toEqual(100)

    const result6 = await get({page:2, limit:20})
    const expectedResult6 = posts.slice(40,60)

    expect(result6.data).toEqual(expectedResult6)
    expect(result6.page).toEqual(2)
    expect(result6.limit).toEqual(20)
    expect(result6.total).toEqual(100)

    const result7 = await get({page:-1, limit:5})
    const expectedResult7 = posts.slice(0,5)

    expect(result7.data).toEqual(expectedResult7)
    expect(result7.page).toEqual(0)
    expect(result7.limit).toEqual(5)
    expect(result7.total).toEqual(100)

    const result8 = await get({page:1000, limit:5})
    const expectedResult8:Post[] = []

    expect(result8.data).toEqual(expectedResult8)
    expect(result8.page).toEqual(999)
    expect(result8.limit).toEqual(5)
    expect(result8.total).toEqual(100)

    const result9 = await get({page:0, limit:-1})
    const expectedResult9 = posts.slice(0,20)

    expect(result9.data).toEqual(expectedResult9)
    expect(result9.page).toEqual(0)
    expect(result9.limit).toEqual(20)
    expect(result9.total).toEqual(100)

    const result10 = await get({page:0, limit:51})
    const expectedResult10 = posts.slice(0,50)

    expect(result10.data).toEqual(expectedResult10)
    expect(result10.page).toEqual(0)
    expect(result10.limit).toEqual(50)
    expect(result10.total).toEqual(100)
})

test('validates/corrects params', 
    () => {
        let page = validatePageParam(undefined)
        let limit = validateLimitParam(undefined)
        expect(page).toEqual(0)
        expect(limit).toEqual(20)

        page = validatePageParam(1)
        limit = validateLimitParam(undefined)
        expect(page).toEqual(1)
        expect(limit).toEqual(20)

        page = validatePageParam(undefined)
        limit = validateLimitParam(5)
        expect(page).toEqual(0)
        expect(limit).toEqual(5)

        page = validatePageParam(0)
        limit = validateLimitParam(2)
        expect(page).toEqual(0)
        expect(limit).toEqual(5)

        page = validatePageParam(0)
        limit = validateLimitParam(51)
        expect(page).toEqual(0)
        expect(limit).toEqual(50)

        page = validatePageParam(0)
        limit = validateLimitParam(-1)
        expect(page).toEqual(0)
        expect(limit).toEqual(20)

        page = validatePageParam(-1)
        limit = validateLimitParam(20)
        expect(page).toEqual(0)
        expect(limit).toEqual(20)

        page = validatePageParam(1000)
        limit = validateLimitParam(20)
        expect(page).toEqual(999)
        expect(limit).toEqual(20)
    }
)

test('calculates mock data indexes correctly',()=>{
    let startIndex = calculateStartIndexFromParams(0, 5)
    let endIndex = calculateEndIndexFromParams(0,5)

    expect(startIndex).toEqual(0)
    expect(endIndex).toEqual(5)

    startIndex = calculateStartIndexFromParams(1, 5)
    endIndex = calculateEndIndexFromParams(1,5)

    expect(startIndex).toEqual(5)
    expect(endIndex).toEqual(10)

    startIndex = calculateStartIndexFromParams(2, 5)
    endIndex = calculateEndIndexFromParams(2,5)

    expect(startIndex).toEqual(10)
    expect(endIndex).toEqual(15)

    startIndex = calculateStartIndexFromParams(0, 20)
    endIndex = calculateEndIndexFromParams(0,20)

    expect(startIndex).toEqual(0)
    expect(endIndex).toEqual(20)

    startIndex = calculateStartIndexFromParams(1, 20)
    endIndex = calculateEndIndexFromParams(1,20)

    expect(startIndex).toEqual(20)
    expect(endIndex).toEqual(40)

    startIndex = calculateStartIndexFromParams(2, 20)
    endIndex = calculateEndIndexFromParams(2,20)

    expect(startIndex).toEqual(40)
    expect(endIndex).toEqual(60)
})