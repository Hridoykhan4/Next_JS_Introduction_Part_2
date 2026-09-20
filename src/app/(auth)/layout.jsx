'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const AuthLayout = ({ children }) => {
    const pathname = usePathname()
    return (
        <div className={`flex min-h-screen gap-5 ${pathname.includes('register') && 'flex-row-reverse'}`}>
            <div className="flex-2">{children}</div>
            <div className="flex-1 bg-sky-600 p-5 flex justify-center items-center">
                <h2 className="text-5xl font-bold">Welcome for Authentication</h2>
            </div>
        </div>
    );
};

export default AuthLayout