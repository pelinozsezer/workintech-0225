function carSimulator(marka, model, kilometre, fiyat) {
  let output = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
  };

  output.getPrice = function () {
    return `Arabanın güncel piyasa değeri ${output.fiyat} TL'dir.`;
  };

  output.refuel = function (benzin) {
    if (benzin <= 0) return `---Geçersiz yakıt miktarı!---`;
    if (output.depo === 100) return `Depo %100 dolu!`;

    output.depo += benzin;
    if (output.depo > 100) output.depo = 100;

    return `Depo %${output.depo} doludur.`;
  };

  // drive
  output.drive = function (kullanilanKilometre) {
    let yakilanBenzin = Math.floor(kullanilanKilometre / 100) * 5;

    // benzin yetersiz
    if (output.depo < yakilanBenzin) {
      let maxKilometre = Math.floor(output.depo / 5) * 100;
      output.kilometre += maxKilometre;
      output.fiyat -= Math.floor(maxKilometre / 100) * 50;
      output.depo = 0; // Benzin bitti
      return `Benzin bitti! ${maxKilometre} km gidildi. Güncel kilometre: ${output.kilometre}`;
    }

    // normal
    output.kilometre += kullanilanKilometre;
    output.depo -= yakilanBenzin;
    output.fiyat -= Math.floor(kullanilanKilometre / 100) * 50;

    return `Araba'nın güncel kilometresi: ${output.kilometre}`;
  };

  return output;
}

console.log(carSimulator('Toyota', 'Corolla', 40000, 1200000));

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = carSimulator;
