function tutarHesapla(liste) {
  const bagisci = 'ahmet'; /* bağış yapacak kişinin adı */
  let counter = 0;

  /* Liste boş mu ve gerçekten array mi? */
  if (!Array.isArray(liste) || liste.length === 0) {
    console.log('Lütfen isim listesi giriniz!');
    return 0;
  }

  /* Main loop */
  for (let i = 0; i < liste.length; i++) {
    let handler = liste[i].toLowerCase(); /* Tüm harfleri küçük harfe çevir */

    /* İsmin içinde bağışçının harflerini say */
    for (let j = 0; j < handler.length; j++) {
      if (bagisci.includes(handler[j])) {
        counter++;
      }
    }
  }

  const bagis = counter * 1000;
  // console.log('Yapılacak bağış: ' + bagis);
  return bagis;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tutarHesapla;
