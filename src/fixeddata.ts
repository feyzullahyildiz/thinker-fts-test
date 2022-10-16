import jsonData from "./data.json";

export const fixedData = jsonData.GecerliSertifikaListesi.map((f) => ({
    id: f.FirmaId,
    marka: f.MarkaAdi,
    firmaAdi: f.FirmaAdi,
    kategoriAdi: f.KategoriAdi,
    kategoriler: (f.KategoriAdi || '').split('/').map(a => a.trim()),
    kapsam: (f.KapsamOnizleme || '').split('\n').map(a => a.trim()), 
  }));


export const getFeedFriendly = ()=> {
  return fixedData.map(f => ({
    id: f.id,
    fields: [f.marka, 
      f.firmaAdi,
      f.kategoriAdi,
    ]
  }))
}
