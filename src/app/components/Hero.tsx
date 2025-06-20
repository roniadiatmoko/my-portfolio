import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return (
        <section className="min-h-screen flex items-center justify-around px-4 md:px-12 bg-white dark:bg-zinc-900 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                        Hello, I am <br/>
                        <span className="text-purple-600 font-bold">Roni Adiatmoko.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 dark:text-zinc-400">
                        <span className="font-bold text-purple-400">Developers</span><br/>
                        I'm a passionate developer who loves crafting clean and efficient code. Welcome to my page!
                    </p>
                    <div className="flex">
                        <Link href="/projects" className="px-6 py-2 bg-purple-400 rounded-full font-medium">
                            My Projects
                        </Link>
                        <Link href="/contact" className="ml-5 px-6 py-2 bg-gray-400 rounded-full font-medium">
                            Contact Me
                        </Link>
                    </div>
                </div>
                
                <div className="flex justify-center md:justify-end">
                    <Image  
                        src="/photos.jpg"
                        alt="This is Me"
                        className="w-64 h-64 md:w-80 mhd:h-80 object-cover rounded-full shadow-lg border-4 border-green-400 dark:border-green-300 transition-all"
                    />
                </div>
            </div>
        </section>
    )
}