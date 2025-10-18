// pages/hizmetler.js
export default function Hizmetler() {
  const services = [
    {
      title: "E-Fatura",
      image: "/images/e-fatura.png",
      description:
        "E-Fatura ile kağıt fatura işlemlerini dijital ortama taşıyarak hız, güvenlik ve yasal uyum sağlayın.",
    },
    {
      title: "E-İmza",
      image: "/images/e-imza.jpg",
      description:
        "Resmi belgelerinizi güvenli ve hızlı şekilde imzalamanızı sağlayan dijital imza teknolojisidir.",
    },
    {
      title: "KEP Adresi",
      image: "/images/kep.jpg",
      description:
        "Kayıtlı Elektronik Posta (KEP) ile gönderdiğiniz her e-posta yasal delil niteliğindedir.",
    },
    {
      title: "Mali Mühür",
      image: "/images/mali-muhur.jpeg",
      description:
        "E-fatura sistemine kayıt için zorunlu olan Mali Mühür, şirketinizin dijital kimliğidir.",
    },
    {
      title: "Dijital Dönüşüm",
      image: "/images/donusum.jpg",
      description:
        "Şirketinizin süreçlerini dijitalleştirerek rekabet gücünüzü artırın, geleceğe hazır olun.",
    },
    {
      title: "Bilgi İşlem Danışmanlığı",
      image: "/images/bilgi-islem.jpg",
      description:
        "Ağ, sistem, güvenlik ve yazılım alanlarında profesyonel danışmanlıkla iş sürekliliğinizi sağlayın.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-lg opacity-90">
            Dijital dönüşüm, elektronik belge yönetimi ve IT danışmanlığı alanlarında uçtan uca çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Hizmetler Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kurumsal Çözümlerimiz</h2>
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
    </main>
  );
}
