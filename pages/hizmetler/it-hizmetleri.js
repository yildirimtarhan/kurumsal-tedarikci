import Image from "next/image";

export default function ITHizmetleri() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">IT Hizmetleri</h1>
      <Image
        src="/it-danismanligi.jpg"
        alt="IT Hizmetleri"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        IT danışmanlığı, şirketlerin yazılım, donanım, ağ güvenliği, veri yönetimi ve
        sistem altyapıları konusunda modern çözümlerle desteklenmesini sağlar. 
        Kurumsal dijitalleşmenin temelini oluşturur.
      </p>
    </div>
  );
}
