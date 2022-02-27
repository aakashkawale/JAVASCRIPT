/*Magic Eight Ball
Build a virtual Magic Eight Ball using control flow in JavaScript. 
You’ll practice building decision making into your programs, and gain 
confidence writing more robust JavaScript code.*/
let userName = 'ak';
if (userName === 'Jane') {
    console.log('Hello, Jane')
} else {
    console.log('Hello')
}

const userQuestion = 'solve my question'
console.log(userQuestion, userName)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}
console.log(eightBall);