export function likes(names) {
    if (names.length === 0) {
        return ("no one likes this");
    } else if (names.length === 1) {
        return (`${names[0]} likes this`);
    } else if (names.length === 2) {
        return (`${names[0]} and ${names[1]} like this`);
    } else if (names.length === 3) {
        return (`${names[0]}, ${names[1]} and ${names[2]} like this`);
    } else {
        let number = names.length - 1;
        return (`${names[0]}, ${names[1]} and ${number} others like this`);
    }
}

const names_0 = ["Alex", "Jacob", "Mark", "Max"];
const names_1 = ["Max", "John", "Mark"];
const names_2 = ["Jacob", "Alex"];
const names_3 = ["Peter"];
const names_4 = [];

export function alphabetPosition(text) {
    // Returns alphabet position of all non-whitespace
    let ascii = new String();
    for (let character of text) {
        if (97 <= character.charCodeAt() && character.charCodeAt() <= 122) {
            let number = character.charCodeAt() - 96;
            let text = number.toString();
            ascii = ascii.concat(text, " ");
        } else if (65 <= character.charCodeAt() && character.charCodeAt() <= 90) {
            let number = character.charCodeAt() - 64;
            let text = number.toString();
            ascii = ascii.concat(text, " ");
        }
    }
    ascii = ascii.trimEnd()
    return ascii;
}

export function alphabetPositionRemodel(text) {
    const alphabetUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let string = "";
    console.log(alphabetLowerCase.indexOf("b") + 1);
    for (let character of text) {
        let position = alphabetLowerCase.indexOf(character) + 1
        if (position === 0) {
            position = alphabetUpperCase.indexOf(character) + 1
        }
        if (position === 0) {
            continue;
        }
        string += position + " ";
    }
    string.trimEnd();
    return string;
}

export function alphabetPositionAnotherRemodel(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length - 1);
}

export function sameCase(a, b) {
    // If either of the characters is not a letter, return -1
    // If both characters are the same case, return 1
    // If both characters are letters, but not the same case, return 0
    var codeA = a.charCodeAt();
    var codeB = b.charCodeAt();
    if (((65 <= codeA && codeA <= 90) && (65 <= codeB && codeB <= 90)) || (97 <= codeA && codeA <= 122) && (97 <= codeB && codeB <= 122)) {
        return 1;
    } else if (((65 <= codeA && codeA <= 90) && (97 <= codeB && codeB <= 122)) || (65 <= codeB && codeB <= 90) && (97 <= codeA && codeA <= 122)) {
        return 0;
    } else {
        return -1;
    }
}

export function countSmileysString(array) {
    // Return the total number of smiling faces in the array
    // Valid smiley face examples: :) :D ;-D :~)
    var smileys = [':)', ':D', ';-D', ':~)'];
    var count = 0;
    for (let smiley of smileys) {
        count = count + array.split(smiley).length - 1;
    }
    console.log(count);
    return count;
}

export function countSmileysList(array) {
    // Return the total number of smiling faces in the array
    // Valid smiley face examples: :) :D ;-D :~)
    var smileys = [':)', ':D', ';-D', ':~)', ';~D'];
    var count = 0;
    array.map((element) => {
        for (let smiley of smileys) {
            if (element === smiley) {
                count++;
            }
        }
        return count;
    })
    return count;
}

const decoder = [
    { character: 'A', code: '.-' },
    { character: 'B', code: '-...' },
    { character: 'C', code: '-.-.' },
    { character: 'D', code: '-..' },
    { character: 'E', code: '.' },
    { character: 'F', code: '..-.' },
    { character: 'G', code: '--.' },
    { character: 'H', code: '....' },
    { character: 'I', code: '..' },
    { character: 'J', code: '.---' },
    { character: 'K', code: '-.-' },
    { character: 'L', code: '.-..' },
    { character: 'M', code: '--' },
    { character: 'N', code: '-.' },
    { character: 'O', code: '---' },
    { character: 'P', code: '.--.' },
    { character: 'Q', code: '--.-' },
    { character: 'R', code: '.-.' },
    { character: 'S', code: '...' },
    { character: 'T', code: '-' },
    { character: 'U', code: '..-' },
    { character: 'V', code: '...-' },
    { character: 'W', code: '.--' },
    { character: 'X', code: '-..-' },
    { character: 'Y', code: '-.--' },
    { character: 'Z', code: '--..' },
    { character: ' ', code: '' },
    { character: 'SOS ', code: '...---...' },
    { character: 'SOS! ', code: '...---...-.-.--' },
    { character: '.', code: '.-.-.-' },
    { character: '!', code: '-.-.--' }
]

export function decodeMorse(morseCode) {
    var translation = new String("");
    var arrayOfwords = morseCode.split("   ");
    var arrayOfsigns = arrayOfwords.map((word) => {
        return word.split(" ");
    })
    arrayOfsigns.map((signs) => {
        signs.map((sign) => {
            decoder.map((decode) => {
                if (sign === decode.code) {
                    translation = translation.concat(decode.character);
                }
            })
        })
        translation = translation.concat(" ");
    })
    translation = translation.trim();
    return translation;
}

export function multiply(number) {
    // Jack really likes his number five.
    // The trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers...
    var count = String((Math.abs(number))).length;
    var result = number;
    for (let i = count; i > 0; i--) {
        result *= 5;
    }
    return <p>{result}</p>;
}

export function isIsogram(string) {
    // An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    // Implement a function that determines whether a string that contains only letters is an isogram.
    // Assume the empty string is an isogram.
    // Ignore letter case.
    const [...characters] = string.toLowerCase().split('');

    if (string === "") {
        return true;
    }

    for (let character of characters) {
        var count = [...string].filter(x => x.toLowerCase() === character).length;
        if (count > 1) {
            return false;
        }
    }
    return true;
}

export function persistence(number) {
    // Write a function that takes in a positive parameter. 
    // The function returns its multiplicative persistence.
    // Persistence is the number of times you must multiply the digits in num until you reach a single digit.
    var string = number.toString();
    var array = [];
    var result = 1;
    var count = 0;
    while (string.length > 1) {
        for (let i = 0; i < string.length; i++) {
            array.push(parseInt(string.charAt(i)));
        }
        for (let j = 0; j < array.length; j++) {
            result = result * array[j];
        }
        string = result.toString();
        array = [];
        result = 1;
        count++;
    }
    return count;
}

export function solution(number) {
    // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    // Additionally, if the number is negative, return 0 (for languages that do have them).
    let result = 0;
    let multiples = [];
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            multiples.push(i);
            result += i;
        } else if (i % 5 === 0) {
            multiples.push(i);
            result += i;
        }
    }
return result;
}
