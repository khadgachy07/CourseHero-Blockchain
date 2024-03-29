import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import React from "react";

export default function ActiveLink({children,...props}){
    const { pathname } = useRouter()
    let className = children.props.children || ""

    if(pathname === props.href){
        className = `${className} text-indigo-600`
    }

    return (
        <Link {...props }>
        {
            React.cloneElement(children, {className})
        }
        </Link>
    )
}