import { Outlet } from "react-router-dom";
import { Nav } from '../Nav'
import type { NavProps } from '../Nav'
import {Footer} from '../Footer'
import type {FooterProps}  from '../Footer'

type LayoutMainProps = {
    nav?: NavProps,
    footer?:FooterProps,  
}

export default function LayoutMain({nav, footer}: LayoutMainProps)
{
    return (
        <div className="mx-auto">
            <main>
                {(nav)?
                    (<Nav logoAlt={nav.logoAlt} logoSrc={nav.logoSrc} logoWidth={nav.logoWidth} logoHeight={nav.logoHeight} openNavScreenReaderText={nav.openNavScreenReaderText}>
                        {nav.children}
                    </Nav>
                ):null}
                <Outlet/>
                {footer && <Footer {...footer}/> }
            </main>
        </div>
    )
}