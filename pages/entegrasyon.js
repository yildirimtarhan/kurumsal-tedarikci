// pages/entegrasyon.js
export default function Entegrasyon() {
  const entegrasyonlar = [
    {
      title: "Hepsiburada Entegrasyonu",
      image: "/images/hepsiburada-entegrasyon.webp",
      description:
        "Hepsiburada API entegrasyonu ile siparişleri, ürünleri ve stok bilgilerini tek panelden yönetin. Otomatik güncellemelerle satış süreçlerinizi hızlandırın.",
    },
    {
      title: "Trendyol Entegrasyonu",
      image: "/images/Trendyol-Entegrasyonu_2.png",
      description:
        "Trendyol mağazanızı panelinize entegre ederek siparişleri tek noktadan kontrol edin, otomatik fatura ve kargo işlemleriyle operasyonel yükü azaltın.",
    },
    {
      title: "Diğer Pazaryerleri",
      image: "/images/donusum.jpg",
      description:
        "İsteğe bağlı entegrasyonlarla N11, Çiçeksepeti gibi diğer pazaryerlerini de sisteminize dahil ederek çok kanallı satış stratejisi oluşturun.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pazaryeri Entegrasyonları</h1>
          <p className="text-lg opacity-90">
            Tüm satış kanallarınızı tek panelden yönetin. Otomatik sipariş yönetimi, faturalama ve kargo süreçleriyle işinizi kolaylaştırın.
          </p>
        </div>
      </section>

      {/* Entegrasyon Kartları */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entegrasyon Çözümlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {entegrasyonlar.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
