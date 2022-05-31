const reverseWord = text =>{
    wordText = text.split('');
    //console.log(wordText);
    reversePhrase = "";


for(words of wordText){ 
    reversePhrase = words + reversePhrase; 
}
console.log(reversePhrase);
return reversePhrase;
}

//console.log(reverseWord("Hola mi nombre es DarkCain"));

module.exports = reverseWord;
