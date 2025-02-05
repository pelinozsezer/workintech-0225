function tasKagitMakas(gamer) {
  const options = ['taş', 'kağıt', 'makas'];
  const computer = options[Math.floor(Math.random() * 3)];

  if (!options.includes(gamer)) {
    return 'Geçersiz seçim! Lütfen taş, kağıt veya makas seçin.';
  }

  if (gamer === computer) {
    return `Senin seçimin: ${gamer}. Bilgisayarın seçimi: ${computer}. Beraberlik!`;
  }

  const kazanmaKurallari = { // object= key: value...
    taş: 'makas',
    kağıt: 'taş',
    makas: 'kağıt',
  };

  if (kazanmaKurallari[gamer] === computer) {
    return `Senin seçimin: ${gamer}. Bilgisayarın seçimi: ${computer}. Kazandın!`;
  } else {
    return `Senin seçimin: ${gamer}. Bilgisayarın seçimi: ${computer}. Kaybettin!`;
  }
}

// const gamer = prompt('Seçiminizi yazınız: taş, kağıt, makas?').toLowerCase(); tasKagitMakas(gamer);
// const gamer = ['taş', 'kağıt', 'makas'][Math.floor(Math.random() * 3)]; tasKagitMakas(gamer);

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
