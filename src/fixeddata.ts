import jsonData from "./data.json";

const getCoreData = () => {
  return jsonData.GecerliSertifikaListesi.map((f) => ({
    id: f.SertifikaId,
    marka: f.MarkaAdi,
    firmaAdi: f.FirmaAdi,
    kategoriAdi: f.KategoriAdi,
    kategoriler: (f.KategoriAdi || "").split("/").map((a) => a.trim()),
    kapsam: (f.KapsamOnizleme || "").split("\n").map((a) => a.trim()),
  }));
};

export const getFeedFriendly = () => {
  const fixedData = getCoreData();
  return fixedData.map((f) => ({
    id: f.id,
    fields: [f.marka, f.kategoriAdi, f.firmaAdi],
  }));
};
export const getAsMap = () => {
  const fixedData = getCoreData();
  const map = new Map();
  for (const d of fixedData) {
    map.set(d.id, d);
  }
  return map;
};

