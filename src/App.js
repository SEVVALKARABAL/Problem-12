import { useState } from "react";

const tabs = ["Hesabım", "Şirket", "Ekip Üyeleri", "Faturalama"];
// Tabs bileşenini yeniden düzenleyin ve aşağıdaki görevleri tamamlayın:
// 1. State setter fonksiyonunu doğru şekilde kullanarak geçerli sekmeyi (currentTab) güncelleyin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Aktif sekmenin arka plan rengini daha belirgin hale getirin. (örneğin: "bg-indigo-200")
//    - Sekmeler arasındaki boşluğu artırmak için "space-x-6" kullanın.
//    - Aktif olmayan sekmelere hover sırasında hafif büyüme efekti ekleyin. (örneğin: "hover:scale-105")
// 3. Kullanıcı farklı sekmeye tıkladığında, geçerli sekmenin adını ekranda dinamik olarak görüntüleyin. (örneğin: "Şu anda 'Ekip Üyeleri' sekmesindesiniz.")
// 4. Sekmelerin içeriğini (örneğin: "Hesabım" sekmesi için form, "Faturalama" sekmesi için tablo) dinamik olarak değiştirmek için içerik alanı ekleyin.

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("Hesabım");

  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex space-x-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`${
              tab === currentTab
                ? "bg-indigo-200 text-indigo-700"
                : "text-gray-500 hover:text-gray-700 hover:scale-105"
            } rounded-md px-3 py-2 text-sm font-medium transition-transform duration-200`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg">Şu anda {currentTab} sekmesindesiniz.</p>
      </div>
      <div className="mt-4">
        {currentTab === "Hesabım" && <div>Hesap formu</div>}
        {currentTab === "Şirket" && <div>Şirket bilgileri</div>}
        {currentTab === "Ekip Üyeleri" && <div>Ekip üyeleri listesi</div>}
        {currentTab === "Faturalama" && <div>Fatura tablosu</div>}
      </div>
    </div>
  );
}
