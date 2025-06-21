'use client'
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-white dark:bg-zinc-900 fixed w-full z-20 top-0 start-0">
            {/* Background grid untuk Light Mode */}
            <div
                className="absolute inset-0 z-0 opacity-10 dark:hidden"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='39' height='39' fill='none' stroke='%237C3AED' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Background grid untuk Dark Mode */}
            <div
                className="absolute inset-0 z-0 opacity-10 hidden dark:block"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='39' height='39' fill='none' stroke='%23C084FC' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
                }}
            />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative z-10">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Portfolio
                    </span>
                </Link>

                {/* RIGHT SIDE */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* BURGER MENU */}
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <Link
                                href="/"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${pathname === "/"
                                        ? "text-purple-700 dark:text-purple-500 font-semibold"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"} 
                                        md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 md:dark:hover:bg-transparent`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${pathname === "/about"
                                        ? "text-purple-700 dark:text-purple-500 font-semibold"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"} 
                                        md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 md:dark:hover:bg-transparent`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${pathname === "/projects"
                                        ? "text-purple-700 dark:text-purple-500 font-semibold"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"} 
                                        md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 md:dark:hover:bg-transparent`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${pathname === "/contact"
                                        ? "text-purple-700 dark:text-purple-500 font-semibold"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"} 
                                        md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 md:dark:hover:bg-transparent`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
