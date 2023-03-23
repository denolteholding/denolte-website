'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menuEntries } from '../data/data';

export default function Navbar(){
    const [isCollapsed, setCollapsed] = useState(true);

    return (
        <nav>
            <div className="flex flex-col items-end flex-wrap p-6 space-x-4 space-y-1 lg:flex-row lg:justify-end">
                <div className="w-fit lg:hidden">
                    <button 
                        className="justify-end px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-gray-600"
                        onClick={() => setCollapsed(!isCollapsed)}>
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
            {menuEntries.map((entry) => (
                <Link key={entry.id} className={isCollapsed ? "hidden lg:block" : ""} href={entry.href}>{entry.title}</Link>
            ))}
            </div>
        </nav>
    )
}