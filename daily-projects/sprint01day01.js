// sprint 01 day 01 project

const vize = parseFloat(prompt('Vize notunu giriniz.'));
const final = parseFloat(prompt('Final notunu giriniz.'));
const donemNotu = (vize * 30) / 100 + (final * 70) / 100;
let harfNotu;

if (donemNotu <= 100 && donemNotu >= 90) {
  harfNotu = 'A';
} else if (donemNotu <= 89 && donemNotu >= 80) {
  harfNotu = 'B';
} else if (donemNotu <= 79 && donemNotu >= 70) {
  harfNotu = 'C';
} else if (donemNotu <= 69 && donemNotu >= 60) {
  harfNotu = 'D';
} else if (donemNotu <= 59 && donemNotu >= 50) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}

console.log(`Harf notunuz: ` + harfNotu);
