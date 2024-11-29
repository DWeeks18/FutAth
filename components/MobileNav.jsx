"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { SlSpeech } from "react-icons/sl";
import { MdEmail, MdOutlineDesignServices } from "react-icons/md";

const links = [
    {
        icon: <IoHome />,
        name: "Home", 
        path: "/",
        offset: 0 
    },
    {
        icon: <GoProjectRoadmap />,
        name: "Projects",
        path: "/projects",
        offset: 0
    },
    {
        icon: <MdOutlineDesignServices />,
        name: "Services",
        path: "/services",
        offset: 0
    },
    {
        icon: <SlSpeech />,
        name: "Testimonials",
        path: "/testimonials",
        offset: 0
    },
    {
        icon: <MdEmail />,
        name: "Contact Us",
        path: "/Contact",
        offset: 0
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            {/* three bar nav */}
            <CiMenuFries className="text-[32px] text-white hover:text-[#03635D]" />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-gradient-to-b from-[#03635D] to-black from-70% to-100% border-[#CEF0FF]">
            {/* logo */}
            <div className="mt-20 mb-40 text-center text-2xl flex items-center justify-center">
                <Link href="/">
                    <h1 className="text-4xl font-bold underline text-white hover:text-black rounded">
                        Future Athlete<span className="text-black"></span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center font-light gap-5 text-white">
                {links.map((link, index) => {
                    return (
                    <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path === pathname ? 'text-white border-b-2 border-[#cef0ff]' : 'text-black'} text-xl capitalize hover:text-white transition-all flex items-center gap-2`}
                    >
                        {link.icon}
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