import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-around px-4 md:px-12 bg-white dark:bg-zinc-900 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
                <div className="space-y-4 order-2 md:order-none">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                        Hello, I am <br />
                        <span className="text-purple-600 font-bold">Roni Adiatmoko.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 dark:text-zinc-400">
                        <span className="font-bold text-purple-400">Developers</span><br />
                        I am a passionate developer who loves crafting clean and efficient code. Welcome to my page!
                    </p>
                    <div className="flex">
                        <Link href="/projects" className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-900 dark:text-white">
                            My Projects
                        </Link>
                        <Link href="/contact" className="ml-2 px-6 py-2 border border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-900 hover:text-white">
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end order-1 md:order-none">
                    {/* Glow blur di belakang gambar */}
                    <div className="absolute w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] rounded-full z-0 
                  bg-[radial-gradient(circle,rgba(138,43,226,0.4)_40%,transparent_70%)] 
                  blur-3xl opacity-60">
                    </div>

                    {/* Gambar profil */}
                    <Image
                        width={320}
                        height={320}
                        src="/pp.png"
                        alt="This is Me"
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 shadow-xl"
                    />
                </div>

            </div>
        </section>
    )
}