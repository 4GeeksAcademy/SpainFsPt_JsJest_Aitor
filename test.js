
const { fromEuroToDollar, fromDollarToYen, fromEuroToDollars, fromYenToPound } = require('./app.js');

// Test para fromEuroToDollar

test("1 euro son 1.07 dolares", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Test para fromDollarToYen

test("equivalencia de 10 dolares a yenes", function() {
    const yenes = fromDollarToYen(10);
    const euros = 10 / 1.07; // dolares a euros
    const expected = euros * 156.5; // euros a yenes
    expect(yenes).toBeCloseTo(expected);
});

// Test para fromYenToPound

test("1000 yenes should be equivalent to pounds", function() {
    const pounds = fromYenToPound(1000);
    const euros = 1000 / 156.5; // yenes a euros
    const expected = euros * 0.87; // de euros a libras
    expect(pounds).toBeCloseTo(expected); 
});
