function anagrams(word, words) {
    let splitandSortWord = word.split("").sort();
    let result = [];
    for (const element of words){
      let splitAndSortWords = element.split("").sort();
      if ((splitandSortWord.length == splitAndSortWords.length) && (splitandSortWord.every((val, index) => val === splitAndSortWords[index]))){
        result.push(element);
      }
    }
    return result;
    }
  
  
    
    console.log(anagrams('racer', ['craasdasszer', 'carer', 'racar', 'caers', 'racer']));