import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🧭 HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png" // LOGO DOĞRUDAN public klasöründe
              alt="Kurumsal Tedarikçi Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-semibold text-lg text-gray-800 hidden sm:inline">
              Kurumsal Tedarikçi
            </span>
          </div>

          {/* MENÜ */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/" className="hover:text-orange-600 transition">Ana Sayfa</a>
            <a href="/hizmetler" className="hover:text-orange-600 transition">Hizmetler</a>
            <a href="/entegrasyon" className="hover:text-orange-600 transition">Entegrasyon</a>
            <a href="#iletisim" className="hover:text-orange-600 transition">İletişim</a>
          </div>

          {/* TEKLİF BUTONU */}
          <a
            href="#iletisim"
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Teklif Al
          </a>

          {/* MOBİL MENÜ BUTONU */}
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

        {/* MOBİL MENÜ */}
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
            <a
              href="/hizmetler"
              className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition"
            >
              Hizmetlerimizi İncele
            </a>
            <a
              href="/entegrasyon"
              className="border border-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              Entegrasyonlar
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* 📞 İLETİŞİM */}
      <section id="iletisim" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
        <p className="text-gray-600 mb-8">
          Size en kısa sürede dönüş yapmamız için formu doldurun veya WhatsApp'tan ulaşın.
        </p>
        <a
          href="mailto:info@tedarikci.org.tr"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
        >
          E-posta Gönder
        </a>
      </section>

      {/* 💬 WHATSAPP SABİT BUTON */}
      <a
        href="https://wa.me/905059112749"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="WhatsApp Destek"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.552 4.096 1.51 5.815L0 24l6.357-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zM17.1 14.846c-.297-.148-1.756-.867-2.03-.965-.273-.099-.473-.148-.672.148-.198.296-.771.965-.945 1.162-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.476-.883-.788-1.48-1.761-1.653-2.057-.173-.296-.018-.456.13-.603.134-.133.297-.347.445-.52.148-.173.198-.297.297-.495.099-.198.05-.37-.025-.519-.074-.148-.672-1.616-.921-2.211-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.37-.272.296-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.148.198 2.1 3.207 5.088 4.495.711.307 1.265.49 1.697.628.713.227 1.36.195 1.872.118.571-.085 1.756-.717 2.005-1.41.247-.694.247-1.29.173-1.41-.074-.123-.272-.198-.57-.347z" />
        </svg>
      </a>

      {/* 🦶 FOOTER */}
      <footer className="bg-slate-900 text-white py-6 text-center mt-16">
        © {new Date().getFullYear()} Kurumsal Tedarikçi — Tüm Hakları Saklıdır.
      </footer>
    </>
  );
}

