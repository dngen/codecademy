//put Kelvin eg. forecast today is 294 Kelvin.
let kelvin = 0;
//convert Kelvin to Celsius by subtracting 273 from the kelvin
let celsius = kelvin-273;
//calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
