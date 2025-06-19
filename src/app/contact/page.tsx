export default function ContactPage(){
    return (
        <div className="max-w-xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-8">📬 Hubungi Saya</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium">Nama</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        placeholder="Nama Lengkap"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input 
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        placeholder="email@contoh.com"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Pesan</label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        placeholder="Tulis pesan Anda..."
                        rows={4}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
                >
                    Kirim
                </button>
            </form>
        </div>
    )
}