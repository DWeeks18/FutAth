"use client";

import react from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Testimonials",
        path: "/testimonials",
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className = "flex gap-8 font-medium" >
            {Links.map((link, index) => {
                return (
                    <Link
                    href = {link.path}
                    key = {index}
                    className={`${
                        link.path === pathname ? "text-[#03635D] border-b-2 border-[#03635D]" : ""
                    } capitalize font-medium hover:text-[#03635D] transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;