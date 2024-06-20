import type { Meta, StoryObj } from '@storybook/react';
import {Footer} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Footer> = {
    title: 'Frontend/Footer',
    component: Footer,
    tags: ['autodocs'],
  };
  
  export default meta;
  type Story = StoryObj<typeof Footer>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
        "nav":{
            "logoSrc":"/logos-are-nice.png",
            "logoAlt":"VP Assessment Logo",
            "logoWidth":161,
            "logoHeight":36,
            "openNavScreenReaderText":"Open main menu",
            "children": [
                {"children":"Home","url":"/"},
                {"children":"About","url":"/about"},
                {"children":"Contact","url":"/contact"}
            ]
        },
        "address":"VP Assessment<br />123 Fake Street<br />Shamville<br />Hoaxshire<br />F4K3 R55<br />",
        "contactLinks":[
            {
                "href":"/",
                "imgSrc":"/social-icons/github.svg",
                "imgAlt":"Github",
                "imgWidth":24,
                "imgHeight":25
            },
            {
                "href":"/contact",
                "imgSrc":"/social-icons/whatsapp.svg",
                "imgAlt":"Whatsapp",
                "imgWidth":24,
                "imgHeight":27
            },
            {
                "href":"/#testimonials",
                "imgSrc":"/social-icons/linkedin.svg",
                "imgAlt":"LinkedIn",
                "imgWidth":24,
                "imgHeight":27
            },
            {
                "href":"/shop",
                "imgSrc":"/social-icons/youtube.svg",
                "imgAlt":"YouTube",
                "imgWidth":24,
                "imgHeight":21
            }
        ],
        "additionalLinks":[
            {
                "href":"/cookie",
                "children":"Cookie Policy"
            },
            {
                "href":"/privacy",
                "children":"Privacy Policy"
            }
        ]
    },
  };