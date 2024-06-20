import React from 'react';
import { Link } from "react-router-dom";
import {StyledLink} from '../StyledLink';
import type { NavPropsData } from '../Nav';
import type { StyledLinkProps } from '../StyledLink';

export type ContactLinkProps = {
    href:string,
    imgSrc:string,
    imgAlt:string,
    imgWidth:number,
    imgHeight:number,
}

export type FooterProps = {
    address:string,
    nav: NavPropsData,
    contactLinks: ContactLinkProps[],
    additionalLinks: StyledLinkProps[],
}

export const Footer = ({address, nav, contactLinks, additionalLinks}: FooterProps) => {
    return (
        <footer className="mx-8 text-gray-200 text-sm">
            <div className="mx-auto max-w-screen-lg flex flex-row flex-wrap justify-center py-4 bg-slate-700">
                <div className={`flex flex-col md:px-4 md:w-1/5`}>
                    <img src={nav.logoSrc} alt={nav.logoAlt} width={nav.logoWidth} height={nav.logoHeight}/>
                    <address className={`address mx-2 leading-8 text-gray-300`} dangerouslySetInnerHTML={{__html: address}} />
                </div>
                <div className={`flex flex-col md:px-4 md:py-2 justify-between md:w-1/5`}>
                    {nav.children.map((navLink,index)=>{
                        return <StyledLink href={navLink.url} key={`nav-link-footer-${index}`}>{navLink.children}</StyledLink>; 
                    })}
                </div>
                <div className={`flex flex-col items-end justify-center items-center md:items-end sm:justify-between md:w-3/5 pt-5 sm:pt-0`}>
                    <div className={`flex flex-row `}>
                    {contactLinks.map((link,index)=>{
                        return (
                            <Link className="mx-4 flex flex-col justify-center items-center" to={link.href} key={`contact-link-${index}`}>
                                <img className="fill-white-500" src={link.imgSrc} alt={link.imgAlt} width={link.imgWidth} height={link.imgHeight}/>
                            </Link> 
                        );
                    })}                                   
                    </div>
                    <div className={`flex flex-row pt-5 sm:pt-0`}>
                        {additionalLinks.map((link,index)=>{
                            return (<StyledLink href={link.href} key={`additional-link-${index}`}>{link.children}</StyledLink>);
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};