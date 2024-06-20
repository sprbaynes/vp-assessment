import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutMain from './components/LayoutMain';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children:[
      {
        index:true,
        element:<><h2>Index content</h2></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
