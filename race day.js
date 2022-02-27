/* Race Day
Design the logic for an app that will give runners information on race day! */
let raceNumber = Math.floor(Math.random() * 1000);
let regis = false;
const age = 18
if (age >= 18 && regis) {
    raceNumber += 100
}
if (age > 18 && regis) {
    console.log(`race will start at 9:30 am ${raceNumber}`)
} else if (age > 18 && !regis) {
    console.log(`Late adults run at 11:00 am ${raceNumber}`)
} else if (age < 18) {
    console.log(`Youth registrants run at 12:30 pm ${raceNumber}`)
} else if (age === 18 && regis) {
    console.log('Runners who are 18 years old and registered early should see the registration desk.')
} else if (age === 18 && !regis) {
    console.log('Runners who are 18 years old and did NOT register early should see the registration desk.')
}