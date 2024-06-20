import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutMain from './components/LayoutMain';
import Home from './pages/Home';
import {NavLink} from './components/Nav'
import type { NavProps } from './components/Nav';
import type { FooterProps } from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const navProps:NavProps = {
  logoSrc:"/logos-are-nice.png",
  logoAlt:"VP Assessment Logo",
  logoWidth:161,
  logoHeight:36,
  openNavScreenReaderText:"Open main menu",
  children: [
      (<NavLink key={"nav-link-0"} url="/">Home</NavLink>),
      (<NavLink key={"nav-link-1"} url="/about">About</NavLink>),
      (<NavLink key={"nav-link-2"} url="/contact">Contact</NavLink>),
  ]
}

const footerProps:FooterProps = {
  nav:{
      logoSrc:"/logos-are-nice.png",
      logoAlt:"VP Assessment Logo",
      logoWidth:161,
      logoHeight:36,
      openNavScreenReaderText:"Open main menu",
      children: [
          {children:"Home",url:"/"},
          {children:"About",url:"/about"},
          {children:"Contact",url:"/contact"}
      ]
  },
  address:"VP Assessment<br />123 Fake Street<br />Shamville<br />Hoaxshire<br />F4K3 R55<br />",
  contactLinks:[
      {
          href:"/",
          imgSrc:"/social-icons/github.svg",
          imgAlt:"Github",
          imgWidth:24,
          imgHeight:25
      },
      {
          href:"/contact",
          imgSrc:"/social-icons/whatsapp.svg",
          imgAlt:"Whatsapp",
          imgWidth:24,
          imgHeight:27
      },
      {
          href:"/#testimonials",
          imgSrc:"/social-icons/linkedin.svg",
          imgAlt:"LinkedIn",
          imgWidth:24,
          imgHeight:27
      },
      {
          href:"/shop",
          imgSrc:"/social-icons/youtube.svg",
          imgAlt:"YouTube",
          imgWidth:24,
          imgHeight:21
      }
  ],
  additionalLinks:[
      {
          href:"/cookie",
          children:"Cookie Policy"
      },
      {
          href:"/privacy",
          children:"Privacy Policy"
      }
  ]
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain nav={navProps} footer={footerProps}/>,
    children:[
      {
        index:true,
        element:<Home />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
