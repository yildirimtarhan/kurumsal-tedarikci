export default function Entegrasyon() {
  const entegrasyonlar = [
    {
      title: "Trendyol Entegrasyonu",
      img: "/images/Trendyol-Entegrasyonu_2.png",
      desc: "Trendyol mağazanızla sipariş, stok ve ürün senkronizasyonunu kolayca yönetin.",
    },
    {
      title: "Hepsiburada Entegrasyonu",
      img: "/images/hepsiburada-entegrasyon.webp",
      desc: "Hepsiburada satış kanalını sisteminize entegre ederek siparişlerinizi tek panelden yönetin.",
    },
    {
      title: "Sunucu & Veri Yönetimi",
      img: "/images/bilgi-islem-daire-baskanligi-siirt-202426194741142.jpg",
      desc: "Kurumsal verilerinizi güvenli sunucularda tutun, veri kayıplarının önüne geçin.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">
        Entegrasyon Çözümlerimiz
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {entegrasyonlar.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-64 h-40 object-contain mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
