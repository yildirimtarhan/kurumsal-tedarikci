export default function Entegrasyon() {
  const entegrasyonlar = [
    {
      title: "Hepsiburada Entegrasyonu",
      desc: "Hepsiburada mağazanızın siparişlerini ve stoklarını tek panelden yönetin.",
      img: "/images/hepsiburada-entegrasyon.webp",
    },
    {
      title: "Trendyol Entegrasyonu",
      desc: "Trendyol siparişlerinizi anlık senkronize edin, faturalarınızı otomatik oluşturun.",
      img: "/images/Trendyol-Entegrasyonu_2.png",
    },
    {
      title: "Dijital Dönüşüm",
      desc: "Tüm e-dönüşüm süreçleriniz için entegre çözümler.",
      img: "/images/donusum.jpeg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Entegrasyon Çözümlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {entegrasyonlar.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
