"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];


const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return <nav className="gap-6 inline-flex">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && 
                "text-cyan-200 border-b-2 border-cyan-200"}
                capitalize font-medium hover:text-cyan-200 transition-all`}>
                    {link.name}
                </Link>
            )
        })}
    </nav>;
}


export default Nav