import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!recaptchaValue) {
      alert("Lütfen robot olmadığınızı doğrulayın 🧠");
      return;
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, recaptcha: recaptchaValue }),
    });

    if (res.ok) {
      alert("Mesajınız başarıyla gönderildi ✅");
      e.target.reset();
      setRecaptchaValue(null);
    } else {
      alert("Bir hata oluştu. Lütfen tekrar deneyin ❌");
    }
  };

  return (
    <>
      {/* 🧭 Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kurumsal Tedarikçi Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg hidden sm:inline">Kurumsal Tedarikçi</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hizmetler" className="hover:text-orange-600">Hizmetler</a>
            <a href="#it-hizmetleri" className="hover:text-orange-600">IT Hizmetleri</a>
            <a href="#iletisim" className="hover:text-orange-600">İletişim</a>
          </div>

          <button
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-2xl hover:bg-orange-600 transition"
          >
            Teklif Al
          </button>

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
        <div
          className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start p-4 space-y-4 text-sm">
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="#it-hizmetleri" onClick={() => setMenuOpen(false)}>IT Hizmetleri</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-2xl">
              Teklif Al
            </button>
          </div>
        </div>
      </header>

      {/* 🟠 Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dijital Dönüşümde Güvenilir Çözüm Ortağınız</h1>
          <p className="text-lg opacity-90 mb-6">
            E-İmza, Mali Mühür, KEP, IT Danışmanlığı ve E-Dönüşüm çözümleriyle işletmenizi geleceğe taşıyın.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-İmza", desc: "Güvenli dijital imza çözümleriyle işlemlerinizi hızlandırın." },
              { title: "Mali Mühür", desc: "Resmi belgelerinizi güven altına alın." },
              { title: "KEP Adresi", desc: "Kayıtlı elektronik posta çözümleriyle yasal güvence sağlayın." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💻 IT Hizmetleri */}
      <section id="it-hizmetleri" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">IT Hizmetleri</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Bilgisayar sistemleri danışmanlığı, ağ çözümleri, sunucu yönetimi ve yazılım entegrasyonlarıyla uçtan uca destek sunuyoruz.
          </p>
        </div>
      </section>

      {/* 📞 İletişim */}
      <section id="iletisim" className="py-20 bg-gray-50">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-center text-slate-600 mb-8">
            Size en kısa sürede dönüş yapmamız için formu doldurun.
          </p>
          <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg space-y-4">
            <input type="text" name="name" placeholder="Adınız Soyadınız" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="E-posta adresiniz" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="Mesajınız" required className="w-full p-2 border rounded h-32"></textarea>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={setRecaptchaValue}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-slate-900 text-white py-6 text-center">
        © {new Date().getFullYear()} Kurumsal Tedarikçi. Tüm hakları saklıdır.
      </footer>
    </>
  );
}
