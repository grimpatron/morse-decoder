const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let charArr = splitString(expr, 10);
  charArr = changeChars(charArr);
  charArr = changeZero(charArr);
  charArr = decodeMorseArray(charArr);
  charArr = changeSpace(charArr);
  let result = charArr.join('');
  return result;
}

function splitString(stringToSplit, chunkSize) {
  const arrayOfChunks = [];
  for (let i = 0; i < stringToSplit.length; i += chunkSize) {
    arrayOfChunks.push(stringToSplit.slice(i, i + chunkSize));
  }
  return arrayOfChunks;
}

function changeChars(arr) {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].includes('10') || arr[i].includes('11')) {      
      arr[i] = arr[i].replace('10', '.');
      arr[i] = arr[i].replace('11', '-');
    }
  }
  return arr;
}

function changeZero(arr) {
  for (let i = 0; i < arr.length; i++) {  
    arr[i] = arr[i].replaceAll('0', '');
  }
  return arr;
}

function changeSpace(arr) {
  for (let i = 0; i < arr.length; i++) {  
    arr[i] = arr[i].replaceAll('**********', ' ');
  }
  return arr;
}

function decodeMorseArray(arr) {
  return arr.map(morseCode => {
    return MORSE_TABLE[morseCode] || morseCode;
  });
}

module.exports = {
  decode,
};
