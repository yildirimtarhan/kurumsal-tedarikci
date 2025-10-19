export default function Hizmetler() {
  const hizmetler = [
    {
      title: "E-İmza",
      desc: "Güvenli elektronik imza çözümleriyle belgelerinizi yasal olarak imzalayın.",
      img: "/images/eimza.jpg",
    },
    {
      title: "Mali Mühür",
      desc: "E-fatura ve diğer e-belgeleriniz için gerekli güvenli kimlik doğrulama aracı.",
      img: "/images/malimuhur.jpg",
    },
    {
      title: "KEP Adresi",
      desc: "Resmi kurumlarla yasal geçerliliği olan elektronik posta iletişimi sağlayın.",
      img: "/images/kep.jpg",
    },
    {
      title: "Bilgisayar Danışmanlığı",
      desc: "Altyapı, ağ ve sistem kurulumlarında profesyonel destek.",
      img: "/images/bilgiislem.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Hizmetlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {hizmetler.map((item, i) => (
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
