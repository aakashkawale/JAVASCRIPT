/* Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.*/


let kelvin = 295
    // its a kelvin
let celcius = kelvin - 273
let fahrenhit = celcius * (9 / 5) + 32
fahrenhit = Math.floor(fahrenhit)
console.log(`The temprature is ${fahrenhit} degrees Fahrenheit`)

let newton = celcius * (33 / 100)
newton = Math.floor(newton)
console.log(newton)