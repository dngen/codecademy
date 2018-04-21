//forecast today is 294 Kelvin.
let kelvin = 294;
//convert Kelvin to Celsius by subtracting 273 from the kelvin
let celsius = kelvin-273;
//Newton
let newton = celsius * (33/100)
//round down Newton
newton = Math.floor(newton);
//calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
//result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit., is ${newton} Newton`);
