let oneEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

// Función para convertir euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuro.USD;
}

// Función para convertir dólares a yenes
const fromDollarToYen = function(dollars) {
    let euros = dollars / oneEuro.USD;
    let yenes = euros * oneEuro.JPY;
    return yenes;
}

// Función para convertir euros a dólares
const fromEuroToDollars = function(euros) {
    return euros * oneEuro.USD;
}

// Función para convertir yenes a libras
const fromYenToPound = function(yenes) {
    let euros = yenes / oneEuro.JPY;
    let pounds = euros * oneEuro.GBP;
    return pounds;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromEuroToDollars, fromYenToPound };
