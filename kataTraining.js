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
var isAnagram = function(test, original) {
    console.log(stringSort(test));
    console.log(stringSort(original));
    return stringSort(test) === stringSort(original);
};

function stringSort(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
};

console.log(isAnagram('Twoo', 'WooT'));