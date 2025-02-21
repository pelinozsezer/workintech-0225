// Aşağıdaki satırı silmeyin
const { fifaData } = require('./fifa.js');

const finallerdekiGolSayilari = (fifaData) => {
  let result = {};

  fifaData.forEach((mac) =>
    mac['Stage'] === 'Final'
      ? ((result[mac['Home Team Name']] =
          (result[mac['Home Team Name']] || 0) + mac['Home Team Goals']),
        (result[mac['Away Team Name']] =
          (result[mac['Away Team Name']] || 0) + mac['Away Team Goals']))
      : null
  );

  return result;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = finallerdekiGolSayilari;
