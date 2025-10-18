import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "E-Fatura",
      image: "/images/e-fatura.png",
      description: "E-Fatura ile kağıt fatura işlemlerini dijital ortama taşıyarak hız, güvenlik ve yasal uyum sağlayın.",
    },
    {
      title: "E-İmza",
      image: "/images/e-imza.jpg",
      description: "Resmi belgelerinizi güvenli ve hızlı şekilde imzalamanızı sağlayan dijital imza teknolojisidir.",
    },
    {
      title: "KEP Adresi",
      image: "/images/kep.jpg",
      description: "Kayıtlı Elektronik Posta (KEP) ile gönderdiğiniz her e-posta yasal delil niteliğindedir.",
    },
    {
      title: "Mali Mühür",
      image: "/images/mali-muhur.jpeg",
      description: "E-fatura sistemine kayıt için zorunlu olan Mali Mühür, şirketinizin dijital kimliğidir.",
    },
    {
      title: "Dijital Dönüşüm",
      image: "/images/donusum.jpg",
      description: "Şirketinizin süreçlerini dijitalleştirerek rekabet gücünüzü artırın, geleceğe hazır olun.",
    },
    {
      title: "Bilgi İşlem Danışmanlığı",
      image: "/images/bilgi-islem.jpg",
      description: "Ağ, sistem, güvenlik ve yazılım alanlarında profesyonel danışmanlıkla iş sürekliliğinizi sağlayın.",
    },
  ];

  return (
    <>
      {/* 🧭 Header */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Kurumsal Tedarikçi</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#hizmetler" className="hover:text-orange-600 transition">Hizmetler</a>
            <a href="/entegrasyon" className="hover:text-orange-600 transition">Entegrasyon</a>
            <a href="#iletisim" className="hover:text-orange-600 transition">İletişim</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
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

        {/* Mobil Menü */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col items-start p-4 space-y-3">
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="/entegrasyon" onClick={() => setMenuOpen(false)}>Entegrasyon</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
          </div>
        )}
      </header>

      {/* 🟠 Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dijital Dönüşümde Güvenilir Çözüm Ortağınız</h1>
          <p className="text-lg opacity-90 mb-6">
            E-İmza, Mali Mühür, KEP, IT Danışmanlığı ve Entegrasyon çözümleriyle işletmenizi geleceğe taşıyın.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
              Hemen Başla
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </section>

      {/* 🧰 Hizmetler */}
      <section id="hizmetler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm flex-grow">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 İletişim */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bizimle İletişime Geçin</h2>
          <p className="text-slate-600 mb-8">Hizmetlerimiz hakkında daha fazla bilgi almak için bize yazın.</p>
          <a
            href="https://wa.me/905059112749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-slate-900 text-white text-center py-6">
        © {new Date().getFullYear()} Kurumsal Tedarikçi. Tüm hakları saklıdır.
      </footer>
    </>
  );
}
