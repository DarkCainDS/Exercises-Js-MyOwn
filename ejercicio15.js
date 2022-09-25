function moreUsed(text){
    let textClean = text.split(' ').join('');
    let arrayLetter = {};
    let max_repeat = 0;
    let letter = "";


    for(word of textClean){
        if(!arrayLetter[word]){
            arrayLetter[word] = 1;
        }else{
            arrayLetter[word]++;
        }
    }
    for(word in arrayLetter){
        if(arrayLetter[word] > max_repeat){
            max_repeat = arrayLetter[word];
            letter = word;
        }
    }
    console.log(max_repeat,letter);
    return `La letra mas repetida es ${letter} y se repite ${max_repeat}`
}
console.log(moreUsed("Hello my name is DarkCain"));