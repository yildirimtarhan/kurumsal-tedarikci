import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🧭 HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Kurumsal Tedarikçi"
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="font-semibold text-lg text-gray-800 hidden sm:block">
              Kurumsal Tedarikçi
            </span>
          </div>

          {/* Menü */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/" className="hover:text-orange-600">Ana Sayfa</a>
            <a href="/hizmetler" className="hover:text-orange-600">Hizmetler</a>
            <a href="/entegrasyon" className="hover:text-orange-600">Entegrasyon</a>
            <a href="#iletisim" className="hover:text-orange-600">İletişim</a>
          </div>

          {/* Teklif Al */}
          <a
            href="#iletisim"
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            Teklif Al
          </a>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
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
        {menuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-3 text-sm">
            <a href="/" onClick={() => setMenuOpen(false)}>Ana Sayfa</a>
            <a href="/hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="/entegrasyon" onClick={() => setMenuOpen(false)}>Entegrasyon</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
            <a
              href="#iletisim"
              className="block text-center bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600"
            >
              Teklif Al
            </a>
          </div>
        )}
      </header>

      {/* 🟠 HERO */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dijital Dönüşümde Güvenilir Çözüm Ortağınız</h1>
          <p className="text-lg opacity-90 mb-6">
            E-İmza, E-Fatura, KEP, IT Danışmanlığı ve Entegrasyon çözümleriyle işletmenizi geleceğe taşıyın.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/hizmetler" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50">
              Hizmetlerimizi İncele
            </a>
            <a href="/entegrasyon" className="border border-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Entegrasyonlar
            </a>
          </div>
        </div>
      </section>

      {/* 📞 İletişim Alanı */}
      <section id="iletisim" className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-gray-600 mb-6">
            Sorularınız veya iş birliği teklifiniz için bizimle iletişime geçin.
          </p>
          <a
            href="mailto:info@tedarikci.org.tr"
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            info@tedarikci.org.tr
          </a>
        </div>
      </section>

      {/* 💬 WhatsApp Butonu */}
      <a
        href="https://wa.me/905059112749"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.552 4.096 1.51 5.815L0 24l6.357-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      </a>

      {/* 🦶 Footer */}
      <footer className="bg-slate-900 text-white py-6 text-center">
        © {new Date().getFullYear()} Kurumsal Tedarikçi — Tüm Hakları Saklıdır.
      </footer>
    </>
  );
}
