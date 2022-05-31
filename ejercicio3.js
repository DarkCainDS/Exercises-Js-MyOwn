const findWord = (text,word) => {
    cleanText = text.split(' ');
    let counter = 0;
    word= word.toLowerCase();


    for(words of cleanText){
        words= words.toLowerCase();
        if(words == word){
            counter++;
        }
    }
   return counter;
}
//console.log(findWord("Hola hola hola mi nombre es Diego nombre Diego", "HOLA"));