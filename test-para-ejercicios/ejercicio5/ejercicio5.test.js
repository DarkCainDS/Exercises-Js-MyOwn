const porcentage = require("./ejercicio5");

test("porcentage de un numero", () => {
    expect(porcentage(500,20)).toEqual("El 20 % de 500 es igual a: 100");
});