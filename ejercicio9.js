const arrayMatch = (array1, array2) => {

    const filtrado = array1.filter( element => {
        return array2.includes(element)
    });

    return filtrado;
    

}
console.log(arrayMatch([2, 3, 4, 5, 10, 15, 19], [2, 3, 7, 8, 9, 10, 18, 19]));