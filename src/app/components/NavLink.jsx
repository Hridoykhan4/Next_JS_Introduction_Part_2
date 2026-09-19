'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    // Exact match for Home, startsWith for sub-routes
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;