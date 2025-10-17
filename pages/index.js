import { useState } from "react";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [whatsappOpen, setWhatsappOpen] = useState(false); // 👈 Mini panel kontrolü

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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kurumsal Tedarikçi Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg hidden sm:inline">Kurumsal Tedarikçi</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hizmetler" className="hover:text-orange-600 transition">Hizmetler</a>
            <a href="#it-hizmetleri" className="hover:text-orange-600 transition">IT Hizmetleri</a>
            <a href="#iletisim" className="hover:text-orange-600 transition">İletişim</a>
          </div>

          <div className="hidden md:block">
            <Button className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition">
              Teklif Al
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü Aç/Kapat"
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

        <div
          className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start p-4 space-y-4 text-sm">
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="#it-hizmetleri" onClick={() => setMenuOpen(false)}>IT Hizmetleri</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl"
              onClick={() => setMenuOpen(false)}
            >
              Teklif Al
            </Button>
          </div>
        </div>
      </header>

      {/* 🏠 Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Dijital Dönüşümde Güvenilir Çözüm Ortağınız
          </h1>
          <p className="text-lg opacity-90 mb-6">
            E-İmza, Mali Mühür, KEP, IT Danışmanlığı ve E-Dönüşüm çözümleriyle işletmenizi geleceğe taşıyın.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">Hemen Başla</Button>
            <Button variant="outline" className="border-white text-white hover:bg-orange-700">
              Daha Fazla Bilgi
            </Button>
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
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💻 IT Hizmetleri */}
      <section id="it-hizmetleri" className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">IT Hizmetleri</h2>
          <p className="text-slate-600 mb-8">
            Bilgisayar sistemleri danışmanlığı, ağ çözümleri, sunucu yönetimi ve yazılım entegrasyonlarıyla uçtan uca destek sunuyoruz.
          </p>
        </div>
      </section>

      {/* 📞 İletişim */}
      <section id="iletisim" className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-center text-slate-600 mb-8">
            Size en kısa sürede dönüş yapmamız için formu doldurun.
          </p>
          <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg space-y-4">
            <input type="text" name="name" placeholder="Adınız Soyadınız" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="E-posta adresiniz" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="Mesajınız" required className="w-full p-2 border rounded h-32"></textarea>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.RECAPTCHA_SITE_KEY}
              onChange={setRecaptchaValue}
            />
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
              Gönder
            </button>
          </form>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Kurumsal Tedarikçi. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      {/* 💬 WhatsApp Sabit Buton + Panel */}
      <div className="fixed bottom-5 right-5 z-50">
        {/* Buton */}
        <button
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition relative"
          aria-label="WhatsApp Destek"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.552 4.096 1.51 5.815L0 24l6.357-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.98 0-3.888-.528-5.556-1.527l-.398-.236-3.77.884.805-3.92-.256-.404A9.794 9.794 0 012.182 12c0-5.414 4.404-9.818 9.818-9.818S21.818 6.586 21.818 12 17.414 21.818 12 21.818zM17.1 14.846c-.297-.148-1.756-.867-2.03-.965-.273-.099-.473-.148-.672.148-.198.296-.771.965-.945 1.162-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.476-.883-.788-1.48-1.761-1.653-2.057-.173-.296-.018-.456.13-.603.134-.133.297-.347.445-.52.148-.173.198-.297.297-.495.099-.198.05-.37-.025-.519-.074-.148-.672-1.616-.921-2.211-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.37-.272.296-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.148.198 2.1 3.207 5.088 4.495.711.307 1.265.49 1.697.628.713.227 1.36.195 1.872.118.571-.085 1.756-.717 2.005-1.41.247-.694.247-1.29.173-1.41-.074-.123-.272-.198-.57-.347z" />
          </svg>
        </button>

        {/* Panel */}
        {whatsappOpen && (
          <div className="absolute bottom-16 right-0 w-64 bg-white shadow-lg rounded-lg border p-4 animate-fadeIn">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">
              Merhaba 👋<br />Nasıl yardımcı olabiliriz?
            </h4>
            <a
              href="https://wa.me/905059112749"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        )}
      </div>
    </>
  );
}
