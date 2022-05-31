const numberReverse = (number) => {
    numberClean = number.toString().split('').reverse().join('');
    result = parseInt(numberClean);
    return result
}
console.log(numberReverse(36));

