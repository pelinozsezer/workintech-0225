function lottery(katilanlar) {
  let kazananlar = [];

  // ilk 5 kişi
  kazananlar = katilanlar.slice(0, 5);

  // her 10. kişi (10., 20., 30., 40. , 50.); toplam 5 tane.
  let herOnuncuKisi = [9, 19, 29, 39, 49];
  herOnuncuKisi.forEach((index) => {
    // function => {if...}
    if (index < katilanlar.length) {
      // ya katılanlar 50 kişiden azsa diye kontrol!
      kazananlar.push(katilanlar[index]);
    }
  });

  // rastgele seçilecek 1 kişi için filtreleme
  let yokSay = [0, 1, 2, 3, 4, 9, 19, 29, 39, 49];
  let filteredKatilanlar = katilanlar.filter(
    (_, index) => !yokSay.includes(index)
  );

  // şimdi rastgele biri ekle
  let onBirinciKisi =
    filteredKatilanlar[Math.floor(Math.random() * filteredKatilanlar.length)];
  kazananlar.push(onBirinciKisi);

  return kazananlar;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = lottery;
