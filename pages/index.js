import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🧭 Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* 🟠 Logo + Yazı */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kurumsal Tedarikçi Logo"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg hidden sm:inline">
              Kurumsal Tedarikçi
            </span>
          </div>

          {/* 📱 Mobil Menü Butonu */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* 🧭 Menü (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hizmetler" className="hover:text-slate-700">
              Hizmetler
            </a>
            <a href="#it-hizmetleri" className="hover:text-slate-700">
              IT Hizmetleri
            </a>
            <a href="#iletisim" className="hover:text-slate-700">
              İletişim
            </a>
          </div>

          {/* Teklif Butonu (Desktop) */}
          <div className="hidden md:block">
            <Button className="rounded-2xl bg-orange-500 hover:bg-orange-600">
              Teklif Al
            </Button>
          </div>
        </nav>

        {/* 📱 Mobil Menü Açılır (Animasyonlu) */}
        <div
          className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start p-4 space-y-4 text-sm">
            <a
              href="#hizmetler"
              className="hover:text-slate-700 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Hizmetler
            </a>
            <a
              href="#it-hizmetleri"
              className="hover:text-slate-700 w-full"
              onClick={() => setMenuOpen(false)}
            >
              IT Hizmetleri
            </a>
            <a
              href="#iletisim"
              className="hover:text-slate-700 w-full"
              onClick={() => setMenuOpen(false)}
            >
              İletişim
            </a>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl"
              onClick={() => setMenuOpen(false)}
            >
              Teklif Al
            </Button>
          </div>
        </div>
      </header>

      {/* 🏠 Hero Bölümü */}
      <main>
        <section className="py-24 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Kurumsal Tedarikçi'ye Hoş Geldiniz
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            E-İmza, Mali Mühür, KEP Adresi, IT Danışmanlığı ve E-Dönüşüm
            Çözümleriyle işletmenizi dijital dünyada güçlendirin.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Hemen Başla
            </Button>
            <Button variant="outline">Daha Fazla Bilgi</Button>
          </div>
        </section>

        {/* 🧰 Hizmetler */}
        <section id="hizmetler" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">
              Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">E-İmza</h3>
                <p className="text-sm text-slate-600">
                  Güvenli dijital imza çözümleriyle işlemlerinizi hızlandırın.
                </p>
              </div>
              <div className="bg-white shadow p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Mali Mühür</h3>
                <p className="text-sm text-slate-600">
                  Mali mühür hizmetleriyle resmi belgelerinizi güven altına alın.
                </p>
              </div>
              <div className="bg-white shadow p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">KEP Adresi</h3>
                <p className="text-sm text-slate-600">
                  Kayıtlı elektronik posta adresi çözümlerimizle yasal güvence
                  sağlayın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 💻 IT Hizmetleri */}
        <section id="it-hizmetleri" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">
              IT Hizmetleri
            </h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto">
              Bilgisayar sistemleri danışmanlığı, ağ çözümleri, sunucu
              yönetimi ve yazılım entegrasyonlarıyla uçtan uca destek sunuyoruz.
            </p>
          </div>
        </section>

        {/* 📞 İletişim */}
        <section id="iletisim" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Bizimle İletişime Geçin</h2>
            <p className="text-slate-600 mb-4">
              Size en kısa sürede dönüş yapmamız için aşağıdaki kanallardan bize ulaşın.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://wa.me/905551112233"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                WhatsApp Destek
              </a>
              <Button variant="outline">E-Posta Gönder</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
