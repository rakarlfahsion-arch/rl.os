import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">RL</div>
            <span className="font-semibold text-gray-900">R&L Fashion</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/catalog" className="hover:text-blue-600">Catalog</Link>
            <Link href="/ai-chat" className="hover:text-blue-600">AI Chat</Link>
            <Link href="/reseller" className="hover:text-blue-600">Reseller</Link>
            <Link href="/career" className="hover:text-blue-600">Career</Link>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Premium Fashion Manufacturer</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Diproduksi dengan teknologi AI dan standar kualitas tertinggi untuk fashion terbaik Anda
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/catalog" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
              Lihat Catalog
            </Link>
            <Link href="/reseller" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
              Jadi Reseller
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kenapa R&L Fashion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI-Powered", desc: "Produksi dioptimalkan dengan teknologi AI untuk hasil terbaik" },
            { title: "Quality Control", desc: "Setiap produk melewati QC ketat di setiap tahap produksi" },
            { title: "Fast Production", desc: "Proses produksi cepat dengan sistem manajemen terintegrasi" },
          ].map((item) => (
            <div key={item.title} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2026 R&L Fashion. All rights reserved.</p>
          <p className="text-sm">Powered by R&L AI OS</p>
        </div>
      </footer>
    </div>
  )
}
