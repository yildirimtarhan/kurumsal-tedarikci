import Image from "next/image";

export default function BilgiIslemDanismanligi() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Bilgi İşlem Danışmanlığı</h1>
      <Image
        src="/bilgisayar-danismanligi.jpg" // istersen özel bir görsel ekleyebilirsin
        alt="Bilgi İşlem Danışmanlığı"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        Bilgi işlem danışmanlığı, işletmelerin bilişim altyapılarını daha verimli, güvenli ve sürdürülebilir hale getirmek için sunulan profesyonel bir hizmettir. Sistem kurulumu, ağ yönetimi, veri güvenliği, yazılım/donanım entegrasyonu ve bakım süreçlerinde uzman ekibimizle tam kapsamlı çözümler üretiyoruz.
      </p>

      <p className="text-slate-700 leading-relaxed mt-4">
        Bu hizmet ile birlikte şirketinizin BT altyapısı analiz edilir, mevcut sistemdeki eksiklikler belirlenir ve size özel bir teknoloji yol haritası çıkarılır. Ayrıca düzenli bakım ve destek planlarıyla olası sistem arızalarının önüne geçilir, kesintisiz bir çalışma ortamı sağlanır.
      </p>

      <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2 text-orange-700">Avantajları</h2>
        <ul className="list-disc ml-6 text-slate-700 space-y-2">
          <li>BT altyapınızın güncel standartlara taşınması</li>
          <li>Sistem kesintilerinin azaltılması ve verimliliğin artırılması</li>
          <li>Güvenlik açıklarının belirlenip önlem alınması</li>
          <li>Profesyonel danışmanlıkla uzun vadeli maliyet avantajı sağlanması</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/iletisim"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Teklif Al
        </a>
      </div>
    </div>
  );
}
