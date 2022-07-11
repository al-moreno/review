// *****     section 9 Introduction to Javascript ES6     *****



/*****     102     *****/
// alert(`Hello`);
// alert(`World`);




/*****     103     *****/
// console.log(typeof("name"));




/*****     104     *****/
// let yourName = prompt(`What is your name?`);
// console.log(yourName);





/*****     105 & 106     Variable exercise     *****/
// const test = () =>{
//     var a = "3";
//     var b = "8";

//     var c = a;
//     a = b;
//     b = c;

//     console.log("a is " + a);
//     console.log('b is ' + b);

// };

// test();





/*****     108     Concatinate Variables     *****/
// const totalGreeting = () => {

// let greeting = "Hello ";
// let individual = prompt('What is your name? ');

// alert(greeting + individual + ". How are you?");
// };

// totalGreeting();





/*****     109     String Length and number of character method    *****/
// const stringCount = () => {

//     let message = prompt("Enter your message");
//     let totalCount = message.length;
//     let countLeft = 240 - totalCount;

//     alert(` You have entered: ${totalCount}, you have ${countLeft} left`);

// };

// stringCount();





/*****     110     Slicing and Extracting Parts of a String    *****/
// const stringCount = () => {

//     let message = prompt("Enter your message");
//     let totalCount = message.length;
//     let countLeft = 10 - totalCount;
//     let slicedVar = message.slice(0,10)

//     alert(` You have entered: ${totalCount}, you have ${countLeft} left`);
//     alert(`Your message stated: ${slicedVar}`)

// };

// stringCount();




/*****     111     changing string to upper case with use of method    *****/
// const caseConverstion = () => {

//     let userName = prompt("What is your name?");

//     let nameSliced = userName.slice(0, 1);
//     nameSliced = nameSliced.toUpperCase();

//     let remainderName = userName.slice(1, userName.length);
//     remainderName = remainderName.toLowerCase();

//     alert(`Hello ${nameSliced}${remainderName}!`)

// };

// caseConverstion();





/*****     113     Basic Arithmetic and the modulo operator    *****/
// const dogAgeConverter = () => {

//     let dogAge = prompt(`How old is your dog? `);

//     let humanAge = (dogAge - 2) * 4 + 21;

//     alert(`Your dog is ${humanAge} in human years`);
// };
// dogAgeConverter();




/*****     119     Functions Part 2    Challange    *****/
// const lifeInWeeks = (age) => {

//     let daysInYear = (90 - age) * 365;
//     let weeksInYear = (90 - age) * 52;
//     let monthsInYear = (90 - age) * 12;

//     alert(`You have ${daysInYear} days, ${weeksInYear} weeks and ${monthsInYear} left of life`)
// }

// lifeInWeeks(prompt(`How old are you?`));




/*****     121     Functions Part 3        *****/

// const lifeInWeeks = (age) => {

//     const daysInYear = (90 - age) * 365;
//     const weeksInYear = (90 - age) * 52;
//     const monthsInYear = (90 - age) * 12;

//     return `You have ${daysInYear} days, ${weeksInYear} weeks and ${monthsInYear} left of life`;
// }

// const message = lifeInWeeks(prompt(`How old are you?`));
// console.log(message)



/*****     122     BMI Calculator    challange      *****/

// const bmiCalculator = (weightInput, heightInput) => {
//     // or
//     // let weightInput1 = prompt(`What is your weight?`);
//     // let heightInput1 = prompt(`What is your height in inches?`);

//     const bmi = weightInput / (Math.pow(heightInput, 2)) * 703;
//     const bmi1 = Math.round(bmi)

//     return `Your bmi is ${bmi1}`
// }

// let response = bmiCalculator(150, 73);
// console.log(response);



/*****     125     Random Number Generator      *****/
// let n = Math.random();
// console.log(n);
// n = n * 6;
// n = Math.floor(n)+ 1;
// console.log(n);

// // other challange

// const loveCalc = () =>{

// let firstName = prompt("What is the name of the your name? ");
// let secondName = prompt("What is the name of the candidate name? ");

// let randomeCalculator = Math.random();
// randomeCalculator = randomeCalculator * 100;
// randomeCalculator = Math.floor(randomeCalculator) + 1;

// alert(`${firstName} and ${secondName} are ${randomeCalculator}% compatable`);
// }
// loveCalc();




/*****     126     Control Statements: Using if-else conditial logic      *****/
// const loveCalc = () =>{

//     let yourName = prompt(`What is your name?`);
//     let otherName = prompt(`What is the candidates name?`);

//     let score = Math.random();
//     score = score * 100;
//     score = Math.floor(score)+ 1;

//     if (score >= 80){
//         alert( `${yourName}, your compatability is ${score}%, you and ${otherName} have a great chance!`);
//     } else if (score <= 79 && score >= 50){
//         alert (`The score for you and ${otherName} is ${score}%, hmm not the greatest. `);
//     } else {
//         alert(`Your score is ${score}%. Not worth your time!`);
//     }
// }

// loveCalc();

// // other challange
// const bmiCalculator = (weightInput, heightInput) => {

//     const bmi = weightInput / (Math.pow(heightInput, 2)) * 703;
//     const bmi1 = Math.round(bmi)


//     if (bmi1 < 18.5) {
//         return `Your BMI is ${bmi1}, so you are underweight`;
//     } else if (bmi1 > 18.5 && bmi1 < 24.9) {
//         return `Your BMI is ${bmi1}, you are of normal weight`;
//     } else {
//         return ` Your BMI is ${bmi1}, you are overweight`
//     }
// }

// let response = bmiCalculator(50, 73);
// console.log(response);



/*****     129     Leap year challange    *****/
// const leapYear = (year) => {

//     if (year % 4 === 0 && year % 100 === 0 & year % 400 === 0) {
//         return `It is the most complicated leap year.`
//     } else if (year % 4 === 0 && year % 100 === 0) {
//         return `Not a leap year`;
//     } else if (year % 4 === 0) {
//         return `Turns out it is a leap year`
//     } else {
//         return `Sorry, its not a leap year`
//     }
// }

// let response = leapYear(1989);
// console.log(response);




/*****     131     Collections: working with Javascript Arrays      *****/
// const checkList = () => {

//     let input = prompt(`What is your name? `);
//     let guestList = [`Ana`, `Sam`, `Samantha`];

//     if (guestList.includes(input)){
//         return `Welcome ${input}! Lets party`;
//     } else {
//         return `You are not on the list`
//     }
// }

// let response = checkList();
// console.log(response);




/*****     132     Adding elements and intermediate Array techniques     *****/





















