const findWord = require("./ejercicio3");

test("encontrar una palabra" , () => {
    expect(findWord("HOla mi nombre es darkcain darkcain hola nombre","hola")).toEqual(2);
});