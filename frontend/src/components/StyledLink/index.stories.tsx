import type { Meta, StoryObj } from '@storybook/react';
import {StyledLink} from './index';


const meta: Meta<typeof StyledLink> = {
    title: 'Frontend/StyledLink',
    component: StyledLink,
    tags: ['autodocs'],
  };
  
  export default meta;
  type Story = StoryObj<typeof StyledLink>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
        href:"/",
        children: `Click here`
    },
  };