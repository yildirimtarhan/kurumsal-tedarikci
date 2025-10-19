export default function Hizmetler() {
  const hizmetler = [
    {
      title: "E-İmza",
      img: "/images/e_imza_nedir_h32121_efb4e.jpg",
      desc: "Elektronik imza, ıslak imza ile aynı hukuki geçerliliğe sahiptir ve dijital ortamda belgeleri güvenle imzalamanızı sağlar.",
    },
    {
      title: "Mali Mühür",
      img: "/images/mali-muhur.jpeg",
      desc: "Mali mühür, e-fatura ve e-defter işlemlerinde şirket kimliğinizi doğrulamak için kullanılır.",
    },
    {
      title: "E-Fatura",
      img: "/images/logo-e-fatura.png",
      desc: "E-Fatura sistemi ile faturalarınızı dijital ortamda hızlı, güvenli ve çevre dostu şekilde oluşturun.",
    },
    {
      title: "KEP Adresi",
      img: "/images/kep-adresi.jpg",
      desc: "KEP (Kayıtlı Elektronik Posta) ile gönderdiğiniz e-postalar yasal delil niteliği taşır.",
    },
    {
      title: "Dijital Dönüşüm",
      img: "/images/donusum.jpeg",
      desc: "Şirketinizin süreçlerini dijitalleştirerek verimliliği artırın ve modern çözümlerle geleceğe hazırlanın.",
    },
    {
      title: "IT Danışmanlığı",
      img: "/images/it-danismanligi.jpg",
      desc: "Ağ yönetimi, sunucu optimizasyonu ve kurumsal yazılım danışmanlığı hizmetleriyle bilgi işlem süreçlerinizi güçlendirin.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">
        Hizmetlerimiz
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {hizmetler.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-56 h-40 object-contain mx-auto mb-4"
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
