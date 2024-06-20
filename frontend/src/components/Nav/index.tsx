import {StyledLink} from '../StyledLink'
import { useState } from 'react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export type NavProps = {
    logoSrc:string,
    logoAlt:string,
    logoWidth:number,
    logoHeight:number,
    openNavScreenReaderText:string,
    children: React.ReactElement<typeof NavLink> | React.ReactElement<typeof NavLink>[] 
}

export type NavPropsData = Omit<NavProps, 'children'> & {children:NavLinkProps[]};

export type NavLinkProps = {
    url:string,
    children: string
}

export const NavLink = ({url, children}:NavLinkProps) => {
    return (
      <StyledLink className="flex flex-col justify-center mx-0 px-10 py-4 lg:py0" href={url}>{children}</StyledLink>
    )
}

export const Nav = ({logoSrc, logoAlt, logoWidth, logoHeight, openNavScreenReaderText, children}:NavProps) => {

    const [navOpen, setNavOpen] = useState(false)

    return (
      <nav className="mx-auto bg-slate-700 text-gray-200 flex flex-col justify-start max-w-6xl text-sm font-medium min-h-[13vh] sm:min-h-[11vh] lg:flex-row lg:px-4 lg:justify-center">
        <div className="flex flex-row mt-4 sm:mt-6 lg:mt-0 items-center justify-center lg:justify-start lg:px-8">
          <Link to="/" ><img className="" src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight}/></Link>
        </div>
        <div className="lg:hidden">
          <button type="button" className="relative flex flex-col items-center justify-center px-4 text-gray-200 text-2xl" aria-controls="mobile-menu" aria-expanded="false" onClick={()=>setNavOpen(!navOpen)}>
            <span className="sr-only">{openNavScreenReaderText}</span>
            <div className="h-8 w-8"></div>
              <FontAwesomeIcon className={`absolute left-5 transition-opacity duration-500 ${navOpen?'opacity-100':'opacity-0'}`} icon={faClose} />
              <FontAwesomeIcon className={`absolute left-5 transition-opacity duration-500 ${navOpen?'opacity-0':'opacity-100'}`} icon={faBars} />            
          </button>
        </div>
        <div className={`${navOpen?'flex pb-4':'hidden'} lg:flex flex-col lg:flex-row lg:grow lg:justify-end px-2`}>
          {children}
        </div>
      </nav>
    )
}