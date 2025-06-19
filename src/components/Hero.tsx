import Link from "next/link";

export default function Hero(){
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center dark:bg-gray-900 dark:text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:bg-gray-900 dark:text-white">
                Halo, saya <span className="text-blue-600">Roni</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
                Frontend Developer | Web Enthusiast
            </p>
            <div className="flex gap-4">
                <Link 
                    href="/projects" 
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                    Lihat Projects
                </Link>
                <Link
                    href="/contact"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
                >
                    Hubungi Saya
                </Link>
            </div>
        </section>
    )
}