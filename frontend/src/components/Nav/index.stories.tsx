import type { Meta, StoryObj } from '@storybook/react';
import {Nav, NavLink} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Nav> = {
    title: 'Frontend/Nav',
    component: Nav,
    tags: ['autodocs'],
  };
  
  export default meta;
  type Story = StoryObj<typeof Nav>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
        "logoSrc":"/logos-are-nice.png",
        "logoAlt":"VP Assessment Logo",
        "logoWidth":161,
        "logoHeight":36,
        "openNavScreenReaderText":"Open main menu",
        "children": [
            (<NavLink key={"nav-link-0"} url="/">Home</NavLink>),
            (<NavLink key={"nav-link-1"} url="/about">about</NavLink>),
            (<NavLink key={"nav-link-2"} url="/contact">about</NavLink>),
        ]
    },    
  };