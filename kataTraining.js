//Create Phone Number

/* function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    for(let i = 0; i < numbers.length; i++){
        format = format.replace("x", numbers[i]);
    }
  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); */

//Remove First and Last Character

/*
function removeChar(str){
    return str.slice(1, -1);
   };

   console.log(removeChar("hello"));
*/

//Convert a Number to a String!

/*
function numberToString(num) {
    return num.toString();
  }

  console.log(numberToString(9));
  console.log(typeof(numberToString(9)));
*/

//A Strange Trip to the Market

/*
function isLockNessMonster(s) {
    return /tree fiddy|three fifty|3.50/.test(s);
  }
   
  console.log(isLockNessMonster('tree fiddy'));
*/

//Anagram Detection
/*
var isAnagram = function(test, original) {
    console.log(stringSort(test));
    console.log(stringSort(original));
    return stringSort(test) === stringSort(original);
};

function stringSort(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
};

console.log(isAnagram('Twoo', 'WooT'));
*/

//Birthday I - Cake
/*
function cake(x, y) {
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var candlesFell = 0;
    const arr = y.split('');
    var valueCandles = (x / 100) * 70;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            console.log(y.charCodeAt(i))
            candlesFell += arr[i].charCodeAt(0);
        } else {
            candlesFell += alpha.indexOf(arr[i]) + 1;
        }
    }
    return candlesFell > valueCandles ? 'Fire!' : 'That was close!';
}

console.log(cake(793, 'yie'));
*/

//Get the Middle Charecter
const getMiddle = (s) => {
    let middle = "";
  
    if (s.length % 2 === 1) middle = [s[(s.length / 2) | 0]];
    else middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];
  
    return middle.join("");
  };
  
  console.log(getMiddle("HELLO0"));

