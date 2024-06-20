import type { Meta, StoryObj } from '@storybook/react';
import {Post} from './index'
import type {PostProps} from './index'


const meta: Meta<typeof Post> = {
    title: 'Frontend/Post',
    component: Post,
    tags: ['autodocs'],
  };
  
  export default meta;
  type Story = StoryObj<typeof Post>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
        "id": "60d21b7067d0d8992e610d02",
        "image": "https://img.dummyapi.io/photo-1563299796-17596ed6b017.jpg",
        "likes": 85,
        "tags": [
            "person",
            "human",
            "camping"
        ],
        "text": "Enjoying sunrise while car camping over a cliff in...",
        "publishDate": "2020-04-24T17:27:27.560Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a12",
            "title": "mr",
            "firstName": "Kenneth",
            "lastName": "Carter",
            "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
        }
    },
  };