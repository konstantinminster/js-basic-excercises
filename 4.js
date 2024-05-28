// You can work here or download the template!
let temperature = 26;
if (temperature < 15) {
  console.log('you should wear a coat');
} else if (temperature >= 15 && temperature <= 25) {
  console.log('wear a sweater');
} else if (temperature > 25) {
  console.log('wear a t-shirt');
}

console.info('Switch Statement');
temperature = 25; // Change the value of day
switch (temperature) {
  case 15:
    console.log('wear coat');
    break;
  case 20:
    console.log('wear a sweater');
    break;
  case 25:
    console.log('wear a t-shirt');
    break;
  default:
    console.log('I have no clue');
}