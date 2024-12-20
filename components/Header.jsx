import Link from "next/link";
import { Button } from "./ui/Button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return <header className = "py-8 xl:py-12 text-white">
    <div className = "container mx-auto flex justify-between items-center">
        <Link href = "/">
        <h1 className = "font-primary text-4xl font-semibold text-white hover:text-[#03635D]">
            Future Athlete<span>.</span>
        </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/Contact">
            <Button className="font-primary bg-primary text-accent hover:text-black hover:bg-white">Contact Us</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className = "xl:hidden">
            <MobileNav />
        </div>
    </div>
  </header>
};

export default Header;
