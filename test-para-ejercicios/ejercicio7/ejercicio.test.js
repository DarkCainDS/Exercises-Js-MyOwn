const odd = require("./ejercicio7");

test("Numeros impares", () => {
    expect(odd(100)).toEqual(50);
});