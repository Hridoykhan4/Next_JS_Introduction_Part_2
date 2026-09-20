/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import NavLink from "./NavLink";

const NAV_ITEMS = [
    { label: 'About', href: '/about' },
    { label: 'Stories', href: '/stories' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register', isCta: true },
];

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Esc কি চাপলে মোবাইল মেনু ক্লোজ হবে
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') setIsOpen(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleKeyDown]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    if (pathname.startsWith('/dashboard')) return null;

    // if(pathname.includes('dashboard')) return null

    return (
        <header className="header-sticky">
            <div className="container-custom flex h-16 items-center justify-between">

                {/* Brand Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold tracking-tight text-base-content hover:opacity-90 transition-opacity"
                >
                    <span aria-hidden="true">🐳</span>
                    <span>Dev-Story</span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 sm:gap-2">
                    {NAV_ITEMS.map((item) => (
                        <NavLink key={item.href} href={item.href} isCta={item.isCta}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="btn btn-ghost btn-square md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-b border-base-300 bg-base-100/95 backdrop-blur-md px-4 py-4 transition-all"
                >
                    <nav className="flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => (
                            <NavLink key={item.href} href={item.href} isCta={item.isCta}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;