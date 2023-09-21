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
    const morseLetters = expr.match(/.{10}/g);


    return morseLetters.map(letter => {
        if (letter === '**********') {
            return ' '; // Пробел
        } else {

            let morseSymbol = '';
            for (let i = 0; i < 10; i += 2) {
                if (letter.substr(i, 2) === '10') {
                    morseSymbol += '.';
                } else if (letter.substr(i, 2) === '11') {
                    morseSymbol += '-';
                }
            }
            return MORSE_TABLE[morseSymbol];
        }
    }).join('');
}

module.exports = {
    decode
}












