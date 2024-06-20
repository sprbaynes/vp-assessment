import React from 'react'
;import type { Preview } from "@storybook/react";
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router'
import LayoutMain  from '../src/components/LayoutMain'
import '../src/index.css'

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({ 
      routing:{
        path: "/",
        element: <LayoutMain />,
        children:[
          {
            index:true,
            element:<><h2>Index content</h2></>
          }
        ]
      } 
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },   
  },
};

export default preview;
