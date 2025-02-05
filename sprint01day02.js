function tasKagitMakas(gamer) {
  // Bilgisayarın rastgele seçimi
  let computer = ['taş', 'kağıt', 'makas'][Math.floor(Math.random() * 3)];

  // Oyun sonucunu belirleme
  if (computer === gamer) {
    return (
      'Senin seçimin: ' +
      gamer +
      '. Bilgisayarın seçimi: ' +
      computer +
      '. Beraberlik!'
    );
  } else if (
    (gamer === 'taş' && computer === 'makas') ||
    (gamer === 'kağıt' && computer === 'taş') ||
    (gamer === 'makas' && computer === 'kağıt')
  ) {
    return (
      'Senin seçimin: ' +
      gamer +
      '. Bilgisayarın seçimi: ' +
      computer +
      '. Kazandın!'
    );
  } else {
    return (
      'Senin seçimin: ' +
      gamer +
      '. Bilgisayarın seçimi: ' +
      computer +
      '. Kaybettin!'
    );
  }
}

// const gamer = prompt('Seçiminizi yazınız: taş, kağıt, makas?').toLowerCase();
// const gamer = ['taş', 'kağıt', 'makas'][Math.floor(Math.random() * 3)];
// tasKagitMakas(gamer);

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;

////////// VERSİYON 2 //////////

/* function tasKagitMakas(gamer) {
  const options = ['taş', 'kağıt', 'makas'];
  const computer = options[Math.floor(Math.random() * 3)];

  if (!options.includes(gamer)) {
    return 'Geçersiz seçim! Lütfen taş, kağıt veya makas seçin.';
  }

  if (gamer === computer) {
    return `Senin seçimin: ${gamer}. Bilgisayarın seçimi: ${computer}. Beraberlik!`;
  }

  const kazanmaKurallari = {
    // object= key: value...
    taş: 'makas',
    kağıt: 'taş',
    makas: 'kağıt',
  };

  if (kazanmaKurallari[gamer] === computer) {
    return `Senin seçimin: ${gamer}. Bilgisayarın seçimi: ${computer}. Kazandın!`;
  } else {
    return `Senin seçimin: ${gamer}. Bilgisayarın seçimi: ${computer}. Kaybettin!`;
  }
} */

// const gamer = prompt('Seçiminizi yazınız: taş, kağıt, makas?').toLowerCase(); tasKagitMakas(gamer);
// const gamer = ['taş', 'kağıt', 'makas'][Math.floor(Math.random() * 3)]; tasKagitMakas(gamer);

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
