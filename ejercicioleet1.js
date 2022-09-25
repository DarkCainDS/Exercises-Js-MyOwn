function romanToInt(s) {
    const simbology = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0;
    s.split('').forEach((element, i) => {
        if(simbology[element] < simbology[s[i + 1]])
            result -= simbology[element];
        else
            result += simbology[element];
        
    });
    return result;
}
console.log(romanToInt('IV'));