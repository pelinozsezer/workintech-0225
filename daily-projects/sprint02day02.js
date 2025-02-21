function macOzeti(evSahibiTakim, deplasmanTakimi) {
  let mac = Array.from({ length: 4 }, (_, i) => i + 1);
  let macSkoru = [];
  let skorlar = { evSahibiTakim: 0, deplasmanTakimi: 0 };

  for (let periyot of mac) {
    let skor = Array.from(
      { length: 2 },
      () => Math.floor(Math.random() * (26 - 12 + 1)) + 12
    );

    macSkoru.push(
      `${periyot}. Periyot: ${evSahibiTakim} ${skor[0]} - ${deplasmanTakimi} ${skor[1]}`
    );

    skorlar.evSahibiTakim += skor[0];
    skorlar.deplasmanTakimi += skor[1];
  }

  if (skorlar.evSahibiTakim > skorlar.deplasmanTakimi) {
    macSkoru.push(
      `Maç Sonucu: ${evSahibiTakim} ${skorlar.evSahibiTakim} - ${skorlar.deplasmanTakimi} kazandı`
    );
  } else if (skorlar.deplasmanTakimi > skorlar.evSahibiTakim) {
    macSkoru.push(
      `Maç Sonucu: ${evSahibiTakim} ${skorlar.evSahibiTakim} - ${skorlar.deplasmanTakimi} kaybetti`
    );
  } else {
    macSkoru.push(
      `Maç ${skorlar.evSahibiTakim} - ${skorlar.deplasmanTakimi} ile uzatmalara gitti`
    );
  }

  return macSkoru;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = macOzeti;
