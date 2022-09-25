const isValid = require('./ejercicioleet5');

test("{}", () => {
    expect(isValid('{}').toBe(true));
});