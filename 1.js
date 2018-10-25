//з десяткової в шістнадцятирічну
const decToHex = n => {
  return parseInt(n).toString(16);
};

console.log(decToHex('12'));

//з десяткової в двійкову
const decToBin = n => {
  return parseInt(n).toString(2);
};

console.log(decToBin('7'));

//з шістнадцятирічної в двійкову
const hexToBin = n => {
  return parseInt(n, 16).toString(2);
};

console.log(hexToBin('c'));

//з двійкової в шістнадцятирічну
const binToHex = n => {
  return parseInt(n, 2).toString(16);
};

console.log(binToHex('1100'));
