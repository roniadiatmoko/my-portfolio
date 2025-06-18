export default function Hero(){
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-gray-50 to-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                Halo, saya <span className="text-blue-600">Roni</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
                Frontend Developer | Web Enthusiast
            </p>
            <div className="flex gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                   Lihat Proyek 
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
                >
                    Hubungi Saya
                </a>
            </div>
        </section>
    )
}