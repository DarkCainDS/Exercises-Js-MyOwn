const numberReverse = require('./ejercicio8');

test("Dado dos numeros invertir numeros", () => {
    expect(numberReverse(36)).toEqual(63);
});