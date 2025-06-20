import Link from "next/link";

export default function Navbar() {
    return (
        <div className="justify-center">
            <Link href="/" className="hover:text-purple-500 text-gray-400 mx-2 transition-color">
                Home
            </Link>
            <Link href="/about" className="hover:text-purple-500 text-gray-400 mx-2 transition-colors">
                About
            </Link>
            <Link href="/projects" className="hover:text-purple-500 text-gray-400 mx-2 transition-colors">
                Projects
            </Link>
            <Link href="/contact" className="hover:text-purple-500 text-gray-400 mx-2 transition-colors">
                Contact
            </Link>
        </div>

    )
}