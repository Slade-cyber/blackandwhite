import { useState } from "react";
import { ChevronDown, House, Shirt, Layers, Type, Palette, PersonStanding, Spline, BicepsFlexed, LibraryBig, Album, HousePlus, NotebookTabs } from "lucide-react"; // Import only necessary icons

// SidebarItemWithCheckbox component
function SidebarItemWithCheckbox({ icon, text, options }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility
  const [checkedOptions, setCheckedOptions] = useState([]); // Manage selected options
  
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle checkbox change for each option
  const handleCheckboxChange = (option) => {
    setCheckedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <li className="mb-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {icon}
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{text}</span>
        <ChevronDown
          size={16}
          className={`ml-auto transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown with checkbox for each option */}
      {isDropdownOpen && (
        <ul className="py-2 space-y-2 pl-6">
          {options.map((option) => (
            <li key={option}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

const SidebarApp = () => {
  // Example data for different categories
  const sehir = ["Istanbul", "Izmir", "Ankara", "Bursa", "Antalya"];
  const etekkesimi = ["A Kesim", "Balık Kesim", "Prenses Kesim", "Kaburga", "Düz Kesim"];
  const yakatipi = ["Straplez", "Kare Yaka", "V Yaka", "Halter Yaka", "Düşük Omuz", 
                    "Tek Omuz", "Bisiklet Yaka", "U Yaka", "İllüzyon Yaka", "Degaje Yaka", "Japone Yaka"];
  const tarzguzellik = ["Bohem", "Büyük Beden", "Vintage", "Tarlantansız", "Modern", "Sade", 
                        "Romantik", "İki Parça", "Uzun Gösteren", "Spor", "Kışlık", "Klasik", "Görkemli"];
  const kumasaksesuar = ["Soten", "Dantel", "İncili", "Fransız Dantelli", "Pelerinli", "Omuz Detaylı", 
                         "Fırfırlı", "Organize", "Tüylü", "Mikado", "Ziberlin", "Kemerli", "Taş İşlemeli", "Örgülü"];
  const dekolte = ["Sırt Dekolteli", "Göğüs Dekolteli", "Bacak Dekolteli", "Göbek Dekolteli",
                   "Yan Dekolteli", "Dekoltesiz"];
  const etekboyu = ["Mini Boy", "Midi Boy", "Kuyruklu", "Uzun Boy", "Asimetrik Etek"];
  const koltipi = ["Uzun Kol", "Askılı", "Karpuz Kol", "Kısa Kol", "Bolon Kol"];
  const renk = ["Beyaz", "Kırık Beyaz", "Krem", "Renkli"];
  const kiralama = ["Kiralanabilir", "Kiralanamaz"];
  const tür = ["Nikah Elbisesi", "After Party", "Söz/Nişan", "Kına", "Gelinlik"];
  const firmagoster = ["Mali", "Burak", "Recep"];
  const tasarimci = ["Kartal", "Kılıç", "Turpçu"];

  return (
    <div className="flex p-4 ">
      <ul>
        <SidebarItemWithCheckbox icon={<House />} text="Şehirler" options={sehir} />
        <SidebarItemWithCheckbox icon={<Shirt />} text="Etek Kesimi" options={etekkesimi} />
        <SidebarItemWithCheckbox icon={<Type />} text="Yaka Tipi" options={yakatipi} />
        <SidebarItemWithCheckbox icon={<Palette />} text="Tarz ve Güzellik" options={tarzguzellik} />
        <SidebarItemWithCheckbox icon={<BicepsFlexed />} text="Kumaş ve Aksesuar" options={kumasaksesuar} />
        <SidebarItemWithCheckbox icon={<LibraryBig />} text="Dekolte" options={dekolte} />
        <SidebarItemWithCheckbox icon={<Album />} text="Etek Boyu" options={etekboyu} />
        <SidebarItemWithCheckbox icon={<PersonStanding />} text="Kol Tipi" options={koltipi} />
        <SidebarItemWithCheckbox icon={<Spline />} text="Renk" options={renk} />
        <SidebarItemWithCheckbox icon={<Layers />} text="Kiralama" options={kiralama} />
        <SidebarItemWithCheckbox icon={<Shirt />} text="Tür" options={tür} />
        <SidebarItemWithCheckbox icon={<HousePlus />} text="Firmaları Göster" options={firmagoster} />
        <SidebarItemWithCheckbox icon={<NotebookTabs />} text="Tasarımcı" options={tasarimci} />
      </ul>
    </div>
  );
};

export default SidebarApp;
