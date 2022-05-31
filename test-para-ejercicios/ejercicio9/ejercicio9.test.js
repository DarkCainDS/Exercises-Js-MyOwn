const arrayMatch = require("./ejercicio9");

test("arrayMatch , is a function to see if two arrays match and return wich one", () => {
    expect(arrayMatch([2, 3, 4, 5, 10, 15, 19], [2, 3, 7, 8, 9, 10, 18, 19])).toEqual([ 2, 3, 10, 19 ]);

});