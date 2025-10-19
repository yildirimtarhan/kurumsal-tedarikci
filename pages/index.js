import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🧭 HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img
              src="/images/logo.png"
              alt="Kurumsal Tedarikçi Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-semibold text-lg text-gray-800 hidden sm:inline">
              Kurumsal Tedarikçi
            </span>
          </motion.div>

          {/* Menü */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            <a href="/" className="hover:text-orange-600 transition">Ana Sayfa</a>
            <a href="/hizmetler" className="hover:text-orange-600 transition">Hizmetler</a>
            <a href="/entegrasyon" className="hover:text-orange-600 transition">Entegrasyon</a>
            <a href="#iletisim" className="hover:text-orange-600 transition">İletişim</a>
          </motion.div>

          {/* Teklif Butonu */}
          <a
            href="#iletisim"
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Teklif Al
          </a>

          {/* Mobil Menü */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobil Menü İçeriği */}
        <div
          className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start p-4 space-y-3 text-sm">
            <a href="/" onClick={() => setMenuOpen(false)}>Ana Sayfa</a>
            <a href="/hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="/entegrasyon" onClick={() => setMenuOpen(false)}>Entegrasyon</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
            <a
              href="#iletisim"
              className="w-full bg-orange-500 text-white text-center py-2 rounded-full hover:bg-orange-600 transition"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </header>

      {/* 🟠 HERO */}
      <motion.section
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Dijital Dönüşümde Güvenilir Çözüm Ortağınız
          </h1>
          <p className="text-lg mb-6 opacity-90">
            E-İmza, E-Fatura, KEP, IT Danışmanlığı ve Entegrasyon çözümleriyle işletmenizi geleceğe taşıyın.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/hizmetler" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
              Hizmetlerimizi İncele
            </a>
            <a href="/entegrasyon" className="border border-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
              Entegrasyonlar
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* 🦶 FOOTER */}
      <footer className="bg-slate-900 text-white py-6 text-center mt-16">
        © {new Date().getFullYear()} Kurumsal Tedarikçi — Tüm Hakları Saklıdır.
      </footer>
    </>
  );
}
