import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
            <div className="flex items-center justify-between max-w-4xl mx-auto px-6 py-4">
                <Link href="/" className="flex items-center no-underline">
                    <img height="32" width="32" alt="logo" className="h-8 w-8 mr-1 object-contain" src="/logo.png" />
                    <span className="text-xl font-primary font-bold tracking-tight pt-1 pl-4">
                        Stickers
                    </span>
                </Link>
                <Link href="/cart" className="relative" aria-label="cart">
                    <FaShoppingCart className="text-palette-primary size-8 text-purple-700 m-auto" />
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
