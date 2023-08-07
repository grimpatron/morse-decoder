const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let x;
    let result = "";
    let morze = ""
    let exprLength = expr.length
    for( let i = 0; i < exprLength; i = i + 10) {
        x = expr.slice(0, 10);
        expr = expr.slice(10);
        morze = "";
        for (let j = 0; j < x.length; j = j +2) {
            if (x[0] == "*") {
                morze += " ";
                break;
            }
            if (x.slice(j, j + 2) == 10) {
                morze += ".";
            } else if (x.slice(j, j + 2) == 11) {
                morze += "-";
            }
        }
        if (morze != " ") {
            result += MORSE_TABLE[morze];
        } else {
            result += " ";
        }
    }
    // console.log(result);
    return result;
}

module.exports = {
    decode
}