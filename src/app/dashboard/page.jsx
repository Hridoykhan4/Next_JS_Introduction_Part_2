'use client'

import React from 'react';
import Title from '../../components/Title';
import { useRouter } from 'next/navigation';

const Dashboard = () => {

    const router = useRouter();

    return (
        <div className="space-y-4">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-sm font-medium text-dark-3 hover:text-primary transition-colors cursor-pointer"
                aria-label="Go Back"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back</span>
            </button>

            {/* Dashboard Title */}
            <Title>Welcome to Dashboard</Title>
        </div>
    );
};

export default Dashboard;