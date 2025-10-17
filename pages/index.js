import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  // 🟢 Açık / Kapalı göstergesi
  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const open = day >= 1 && day <= 5 && hour >= 9 && hour < 18;

    const dot = document.getElementById("status-dot");
    const text = document.getElementById("status-text");

    if (dot && text) {
      if (open) {
        dot.className = "w-2 h-2 rounded-full bg-green-400";
        text.textContent = "Şu anda açık";
      } else {
        dot.className = "w-2 h-2 rounded-full bg-red-400";
        text.textContent = "Şu anda kapalı";
      }
    }
  }, []);

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
      {/* 📞 Üst Sabit Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#0A2540] text-white text-sm md:text-base py-2 z-[60]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Sol */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+905055912749" className="underline hover:text-blue-200 transition">
                +90 505 591 2749
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <span className="opacity-90">Hafta içi 09:00 - 18:00</span>
            </div>
            <div id="status-indicator" className="flex items-center gap-1">
              <div id="status-dot" className="w-2 h-2 rounded-full bg-gray-300"></div>
              <span id="status-text" className="text-xs opacity-90">Durum yükleniyor...</span>
            </div>
          </div>

          {/* Sağ */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://wa.me/905055912749?text=Merhaba,%20web%20sitenizden%20ulaşıyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs md:text-sm transition"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Kurumsal+Tedarikçi/@41.015137,28.979530,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-full text-xs md:text-sm transition"
            >
              📍 Konum
            </a>
            <a
              href="#iletisim"
              className="bg-white text-[#0A2540] px-4 py-1 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-100 transition"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </div>

      {/* 🧭 Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-[48px] z-50 bg-white/90 backdrop-blur border-b shadow-sm"
      >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kurumsal Tedarikçi Logo" className="h-8 md:h-10 w-auto" />
            <span className="font-semibold text-lg hidden sm:inline text-[#0A2540]">Kurumsal Tedarikçi</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hizmetler" className="hover:text-[#0A2540] transition">Hizmetler</a>
            <a href="#it-hizmetleri" className="hover:text-[#0A2540] transition">IT Hizmetleri</a>
            <a href="#iletisim" className="hover:text-[#0A2540] transition">İletişim</a>
          </div>
          <button
            className="hidden md:block bg-[#0A2540] text-white px-4 py-2 rounded-2xl hover:bg-[#17365f] transition"
          >
            Teklif Al
          </button>
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
      </motion.header>

      {/* 🟦 Hero */}
      <section className="bg-[#0A2540] text-white py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl font-bold mb-4">Dijital Dönüşümde Güvenilir Çözüm Ortağınız</h1>
          <p className="text-lg opacity-90 mb-6">
            E-İmza, Mali Mühür, KEP, IT Danışmanlığı ve E-Dönüşüm çözümleriyle işletmenizi geleceğe taşıyın.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-[#0A2540] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Hemen Başla
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-[#17365f] transition">
              Daha Fazla Bilgi
            </button>
          </div>
        </motion.div>
      </section>

      {/* 🧰 Hizmetler (animasyonlu) */}
      <section id="hizmetler" className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2540]">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📝", title: "E-İmza", desc: "Güvenli dijital imza çözümleriyle işlemlerinizi hızlandırın." },
              { icon: "🔐", title: "Mali Mühür", desc: "Resmi belgelerinizi güven altına alın." },
              { icon: "📬", title: "KEP Adresi", desc: "Kayıtlı elektronik posta çözümleriyle yasal güvence sağlayın." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-[#0A2540]">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 💻 IT Hizmetleri */}
      <section id="it-hizmetleri" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0A2540]">IT Hizmetleri</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Bilgisayar sistemleri danışmanlığı, ağ çözümleri, sunucu yönetimi ve yazılım entegrasyonlarıyla uçtan uca destek sunuyoruz.
          </p>
        </motion.div>
      </section>

      {/* 📞 İletişim Formu */}
      <section id="iletisim" className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0A2540]">Bizimle İletişime Geçin</h2>
          <p className="text-center text-slate-600 mb-8">
            Size en kısa sürede dönüş yapmamız için formu doldurun.
          </p>
          <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg space-y-4">
            <input type="text" name="name" placeholder="Adınız Soyadınız" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="E-posta adresiniz" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="Mesajınız" required className="w-full p-2 border rounded h-32"></textarea>

            <div className="flex justify-center">
              <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setRecaptchaValue} />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A2540] text-white py-2 rounded hover:bg-[#17365f] transition"
            >
              Gönder
            </button>
          </form>
        </motion.div>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-[#0A2540] text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Kurumsal Tedarikçi. Tüm hakları saklıdır.
      </footer>

      {/* 💬 WhatsApp Sabit Butonu */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition relative"
          aria-label="WhatsApp Destek"
        >
          💬
        </button>
        {whatsappOpen && (
          <div className="absolute bottom-16 right-0 w-64 bg-white shadow-lg rounded-lg border p-4 animate-fadeIn">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">
              Merhaba 👋<br />Nasıl yardımcı olabiliriz?
            </h4>
            <a
              href="https://wa.me/905055912749"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        )}
      </div>
    </>
  );
}
