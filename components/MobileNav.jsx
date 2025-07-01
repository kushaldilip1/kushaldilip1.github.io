"use client";

import { Sheet, SheetContent, SheetTrigger } from'@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "skills",
        path: "/skills",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];



const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className= "flex justify-center items-center">
                <CiMenuFries  className="logo-icon text-[18px] text-cyan-200"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                
                {/* Logo */}
                <div className='mt-32 mb-40 text-center text-xl'>
                    <Link href="/">
                        <h1 className='logo text-3xl font-semibold'>
                            Kushal <span className='text-cyan-200'>.</span>
                        </h1>
                    </Link>
                </div>

                {/* Nav */}
                <div className="navs flex flex-col justify-center items-center gap-8">
                    { links.map((link, index) => {
                        return (
                            <Link href= {link.path} 
                            key= {index}
                            className={`${link.path === pathname && 
                            "text-cyan-200 border-b-2 border-cyan-200"}
                             text-md capitalize hover:text-cyan-200 transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;