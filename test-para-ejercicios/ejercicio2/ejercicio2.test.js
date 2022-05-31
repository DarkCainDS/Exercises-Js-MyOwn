const palindromo = require("./ejercicio2");

test("Comprobar si la funcion palindromo esta definida", () => {
    expect(palindromo).toBeDefined();
});

test("Es un palindromo", () => {
    expect(palindromo("otto")).toEqual("otto corresponde a un palindromo");
});
test("No es palindromo", () => {
    expect(palindromo("Diego")).toEqual("diego no corresponde a un palindromo");
})