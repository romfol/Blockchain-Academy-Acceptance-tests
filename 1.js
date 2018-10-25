//з десяткової в шістнадцятирічну
const decToHex = string => {
  string = parseInt(string);
  return string.toString(16);
};

console.log(decToHex('12'));

//з десяткової в двійкову
const decToBin = string => {
  string = parseInt(string);
  return string.toString(2);
};

console.log(decToBin('7'));

//з шістнадцятирічної в двійкову
const hexToBin = string => {};

console.log(hexToBin(7));
