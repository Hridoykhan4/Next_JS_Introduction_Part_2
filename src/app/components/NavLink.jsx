import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${pathname.startsWith(href) && 'bg-sky-200 py-3 px-1'}`}>
           {children}
        </Link>
    );
};

export default NavLink;