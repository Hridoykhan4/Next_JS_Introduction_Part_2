'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Header = () => {

    const pathname = usePathname()
    console.log(pathname);
    if (pathname.startsWith('dashboard')) return <></>



    return (
        <header className="px-4 py3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
            <Link href={"/"} className="text-lg font-semibold">
                🐳 Dev-Story
            </Link>
        <nav className="flex gap-4 items-center">
            {
                [
                    'About', 'Stories', 'Tutorials', 'Login', 'Register'
                ].map(link => <NavLink key={link} href={`/${link.toLowerCase()}`}>{link}</NavLink>)
            }
        </nav>
        </header>



    );
};

export default Header;  