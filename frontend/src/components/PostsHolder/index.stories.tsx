import type { Meta, StoryObj } from '@storybook/react';
import {PostsHolder} from '../PostsHolder'
import {Post} from '../Post'

const meta: Meta<typeof PostsHolder> = {
    title: 'Frontend/PostsHolder',
    component: PostsHolder,
    tags: ['autodocs'],
  };
  
  export default meta;
  type Story = StoryObj<typeof PostsHolder>;
  
  const posts = [{
    "id": "60d21b6867d0d8992e610cec",
    "image": "https://img.dummyapi.io/photo-1570666885815-807a09b271f1.jpg",
    "likes": 19,
    "tags": [
        "animal",
        "canine",
        "pet"
    ],
    "text": "Little Street Dog selective focus photography of s...",
    "publishDate": "2020-05-13T02:27:41.698Z",
    "owner": {
        "id": "60d0fe4f5311236168a109d2",
        "title": "mr",
        "firstName": "Evan",
        "lastName": "Carlson",
        "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
    }
},
{
    "id": "60d21aef67d0d8992e610b85",
    "image": "https://img.dummyapi.io/photo-1572329629720-9aba0fc5b608.jpg",
    "likes": 19,
    "tags": [
        "dog",
        "pet",
        "animal"
    ],
    "text": "white wolf yawning",
    "publishDate": "2020-05-13T02:25:05.394Z",
    "owner": {
        "id": "60d0fe4f5311236168a109e6",
        "title": "miss",
        "firstName": "Milla",
        "lastName": "Pollari",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    }
},
{
    "id": "60d21b3c67d0d8992e610c68",
    "image": "https://img.dummyapi.io/photo-1582048436722-99997f16fef7.jpg",
    "likes": 8,
    "tags": [
        "dog",
        "furniture",
        "couch"
    ],
    "text": "Possibly my favourite photo of Rosie. brown and wh...",
    "publishDate": "2020-05-12T19:06:33.331Z",
    "owner": {
        "id": "60d0fe4f5311236168a10a23",
        "title": "miss",
        "firstName": "Oya",
        "lastName": "Cetiner",
        "picture": "https://randomuser.me/api/portraits/med/women/66.jpg"
    }
},
{
    "id": "60d21bdf67d0d8992e610e49",
    "image": "https://img.dummyapi.io/photo-1562054438-f127502ea154.jpg",
    "likes": 13,
    "tags": [
        "canine",
        "grass",
        "plant"
    ],
    "text": "A black and white Border Collie Southland New Zeal...",
    "publishDate": "2020-05-12T06:08:40.293Z",
    "owner": {
        "id": "60d0fe4f5311236168a109fc",
        "title": "mr",
        "firstName": "Gonzaga",
        "lastName": "Ribeiro",
        "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
    }
},
{
    "id": "60d21ae467d0d8992e610b65",
    "image": "https://img.dummyapi.io/photo-1516286171179-d00a36a2bbfa.jpg",
    "likes": 44,
    "tags": [
        "dog",
        "canine",
        "grey"
    ],
    "text": "long-coated white dog",
    "publishDate": "2020-05-12T04:46:45.276Z",
    "owner": {
        "id": "60d0fe4f5311236168a10a07",
        "title": "mr",
        "firstName": "Sigmund",
        "lastName": "Myran",
        "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
    }
},
{
    "id": "60d21b9167d0d8992e610d5f",
    "image": "https://img.dummyapi.io/photo-1555897209-208b67f652c5.jpg",
    "likes": 52,
    "tags": [
        "dog",
        "animal",
        "canine"
    ],
    "text": "two brown and black dogs sitting on green grass fi...",
    "publishDate": "2020-05-12T02:16:01.087Z",
    "owner": {
        "id": "60d0fe4f5311236168a10a0b",
        "title": "miss",
        "firstName": "Margarita",
        "lastName": "Vicente",
        "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    }
},
{
    "id": "60d21baf67d0d8992e610db5",
    "image": "https://img.dummyapi.io/photo-1517364972157-8a188706451b.jpg",
    "likes": 47,
    "tags": [
        "sunrise",
        "sunset",
        "beach"
    ],
    "text": "@adventure.yuki desert sunrise dog walking on road...",
    "publishDate": "2020-05-11T18:50:53.654Z",
    "owner": {
        "id": "60d0fe4f5311236168a10a04",
        "title": "mr",
        "firstName": "Konsta",
        "lastName": "Manninen",
        "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
    }
},
{
    "id": "60d21bef67d0d8992e610e7c",
    "image": "https://img.dummyapi.io/photo-1557722552-16f574788e2b.jpg",
    "likes": 9,
    "tags": [
        "dog",
        "animal",
        "canine"
    ],
    "text": "short-coated tan dog",
    "publishDate": "2020-05-10T21:28:38.838Z",
    "owner": {
        "id": "60d0fe4f5311236168a10a28",
        "title": "miss",
        "firstName": "OcÃ©ane",
        "lastName": "Denis",
        "picture": "https://randomuser.me/api/portraits/med/women/51.jpg"
    }
},
{
    "id": "60d21b2367d0d8992e610c1f",
    "image": "https://img.dummyapi.io/photo-1505942288483-e87225415542.jpg",
    "likes": 155,
    "tags": [
        "dog",
        "canine",
        "poodle"
    ],
    "text": "Poodle in a Field poodle in grass",
    "publishDate": "2020-05-10T19:58:19.510Z",
    "owner": {
        "id": "60d0fe4f5311236168a109f3",
        "title": "mr",
        "firstName": "Donald",
        "lastName": "Hopkins",
        "picture": "https://randomuser.me/api/portraits/med/men/73.jpg"
    }
},
{
    "id": "60d21bb867d0d8992e610dd3",
    "image": "https://img.dummyapi.io/photo-1558929996-da64ba858215.jpg",
    "likes": 75,
    "tags": [
        "dog",
        "animal",
        "canine"
    ],
    "text": "two white and brown dogs",
    "publishDate": "2020-05-10T19:10:15.391Z",
    "owner": {
        "id": "60d0fe4f5311236168a109cb",
        "title": "miss",
        "firstName": "Edita",
        "lastName": "Vestering",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    }
}]

  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
        children: posts.map((post,index)=>{
            return <Post {...post} />
        })
    }
  };
