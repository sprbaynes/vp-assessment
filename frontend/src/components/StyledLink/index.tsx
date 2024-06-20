import { Link } from "react-router-dom";

export type StyledLinkProps = {
    href:string
    children:string
    className?:string
}

export const StyledLink = ({href, children, className=''}: StyledLinkProps) => {
    return (
        <Link to={href} className={`mx-4 underline no-underline hover:underline font-bold ${className?className:''}`}>{children}</Link>
    )
}