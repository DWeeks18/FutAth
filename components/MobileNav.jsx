"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home", 
        path: "/" 
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
    {
        name: "Contact Us",
        path: "/Contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-[#03635D] hover:text-[#82A3A1]" />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-[#82A3A1]">
            {/* logo */}
            <div className = "mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className = "text-4xl font-bold underline-white text-white border-8 border-white bg-[#03635D]">
                    Future Athlete<span className = "text-black"></span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center font-bold gap-8 text-white">
                {links.map((link, index) => {
                    return (
                    <Link 
                    href={link.path} 
                    key={index} 
                    className={'${link.path === pathname && "text-accent border-b-2 border-black"} text-xl capitalize hover:text-[#03635D] transition-all'}
                    >
                        {link.name}
                    </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
    );
};

export default MobileNav;