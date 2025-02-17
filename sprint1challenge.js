function eytDetaylari(info) {
  /* info: array=[[calisanAdi, cinsiyet, iseGirisTarihi, sigortaliYillar, primGunSayisi, guncelMaas]] */
  let eytliListesi = [];
  let guncelCalisanListesi = [];
  let toplamMaasGideri = 0;

  for (let item of info) {
    if (
      item[2] <= 1999 &&
      ((item[1] === 'Kadın' && item[3] >= 20) ||
        (item[1] === 'Erkek' && item[3] >= 25)) &&
      item[4] >= 5000
    ) {
      eytliListesi.push(item[0]);
    } else {
      guncelCalisanListesi.push(item[0]);
      toplamMaasGideri += item[5];
    }
  }

  return [eytliListesi, guncelCalisanListesi, toplamMaasGideri];
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = eytDetaylari;
