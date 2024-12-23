const products = {
  women: [
    {
      id: 1001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Klasik Smokin",
      fiyat: "7.000 - 9.000",
      imageUrl: 'image-url',
      firma: 'XYZ Firma',
      il: 'İstanbul',
      etekKesimi: 'A Kesimi',
      yakaTipi: 'V Yaka',
      tarzOzellik: 'Vintage',
      kumasAksesuar: 'Dantel, Tül',
      dekolteTipi: 'Göğüs Dekolteli',
      etekBoyu: 'Uzun Boy',
      kolTipi: 'Kolsuz',
      renk: 'Beyaz',
      kiralamaOpsiyonu: 'Kiralanamaz',
      tur: 'Gelinlik',
      aciklama: [
          'Belden itibaren A harfi çizerek inen A kesim gelinlikler, her vücut tipi için ideal!',
          'Omuzları öne çıkaran bu straplez yaka gelinlik, özellikle açık ya da yarım toplu saç modelleri ile büyük bir uyum sağlıyor.',
          'Sen de fazla gösterişten hoşlanmıyor ve özellikle aile arasında küçük bir törenle evlenmeyi planlıyorsan, bu sade tarzdaki gelinliği düşünebilirsin!',
          'Pürüzsüz ve sert yapıya sahip mikado kumaştan hazırlanan bu gelinlik, sonbahar ve kış aylarında evlenecek gelinlerin favorisi olacak.'
      ],
      thumbnails: [
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRorSMSU78n8ktGeRXnOFwV2DyNFzR15RRv38uC1EI4ZWv1IeCbhS3JEJ-rDl8I3UemQBOcU0NEcNi48HBDcxF5zCfB2tj4B6Jik1DPTO8HSMGR8msX_qsOXg&usqp=CAE.jpg",
          "https://medihacambaz.com/cdn/shop/files/bianca-uzun-kollu-payet-ve-boncuk-isli-gelinlik-mediha-cambaz-bridal-1_600x.jpg?v=1714577846.jpg",
          "https://ideacdn.net/idea/jn/11/myassets/products/176/myra.jpg?revision=1724481987.jpg",
          "https://s.alicdn.com/@sc04/kf/H18327a5a68794377a6bc4d6032902aa9G.jpg_720x720q50.jpg",
          "https://ideacdn.net/idea/jn/11/myassets/products/682/vega-on-ii.jpg?revision=1697143329.jpg",
          "https://www.yesimgelinlik.com/wp-content/uploads/2022/08/prenses-gelinlik-modeli-33-4056835395.jpg"
      ],
    },
  ],
  men: [
    {
      id: 2001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Dekolteli Beyaz Gelinlik",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://witcdn.kip.com.tr/10141084-100-smokin-takim-elbise-kip-2259676-46-B.jpg",
      ],
    },
    {
      id: 2002,
      ureticiAdi: "ABC Firma",
      urunAdi: "Modern Smokin",
      fiyat: "5.000 - 8.000",
      thumbnails: [
        "https://cdn.beymen.com/mnresize/505/704/productimages/plf0vjiw.pc3_IMG_01_8699125779971.jpg",
      ],
    },
  ],
  marriageProposal: [
    {
      id: 3001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://www.kapadokyabalonturlari.com.tr/assets/images/product/product/kapadokya-balonlar-esliginde-evlilik-teklifi_2.jpg",
      ],
    },
  ],
  engagement: [
    {
      id: 4001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://cakiltasitasarim.com/wp-content/uploads/2021/03/luks-kiz-isteme-cicegi-ve-cikolatasi-en-pahali-cakiltasitasarim.com_-848x1024.jpeg",
      ],
    },
  ],
  invitation: [
    {
      id: 5001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://www.alodavetiye.com.tr/wp-content/uploads/2022/08/50-adet-davetiye.jpg",
      ],
    },
  ],
  hairdresser: [
    {
      id: 6001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://egguzellik.com/tema/genel/uploads/hizmetler/bayankuafor.jpg",
      ],
    },
  ],
  henna: [
    {
      id: 7001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://www.makbul.com/Content/global/images/products/2/280/ORG-kina-kg922.jpg",
      ],
    },
  ],
  wedding: [
    {
      id: 8001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://dugunrehberi.com.tr/img/firmalar/b/h_1486812255_4.jpg",
      ],
    },
  ],
  photograph: [
    {
      id: 9001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://www.cihangenc.com.tr/wp-content/uploads/2019/08/talh1-web.gif",
      ],
    },
  ],
  holiday: [
    {
      id: 10001,
      ureticiAdi: "XYZ Firma",
      urunAdi: "Kapadokya Bitches",
      fiyat: "6.000 - 8.000",
      thumbnails: [
        "https://www.bungalov.com.tr/images/hotel/6219_v_123730.jpg",
      ],
    },
  ],
};
export default products;
