// var firstName = 'Wissanu';
// let lastName = 'Kongjandee';
// const isMarried = false;
// let age = 14;

// const calAge = function () {

// };

// const person = {
//   fisrtName: 'Wissanu',
//   lastName: 'Kongjundee'
// }

// birthYear = 1990

// {
//   let age = 20;
//   var firstName = 'Wissanu';
// }

// Boolean conversion 0, '', undefined, null, Nan convert to false ' ', '0' 

// Number, String, Boolean, undefine, null

// console.log('Hello my name is ' + firstName + ' ' + lastName + '.' + ' I\'m ' + age + 'years old.')
// console.log(`Hello my name is ${fisrtName} ${lastName}. I'm ${age} years old`)

// if (age > 20) {
//   console.log('You can visit this site')
// } else if (age > 15) {
//   console.log('need parent to recommend')
// } else {
//   console.log('you not allow to view this site')
// }

// const isAllow = age > 20 ? true : false;
// const point = 85;
// const grade = point >= 80 ? 'A' : (point >= 70 ? 'B' : (point >= 60 ? 'C' : (point >= 50 ? 'D' : 'F')))

// let grade = 'F';

// if (point >= 80) {
//   grade = 'A';
// } else if (point >= 70) {
//   grade = 'B';
// } else if (point >= 60) {
//   grade = 'C';
// } else if (point >= 50) {
//   grade = 'D';
// } else {
//   grade = 'F'
// }

// const sex = 'Male'

// switch (sex) {
//   case 'Male':
//     console.log('You are a man');
//     break;
//   case 'Female':
//     console.log('You are a woman')
//     break
//   default:
//     console.log('I don\' know')
// }

// let result = '';
// for (let i = 0; i < 4; i++) { // i = i+1
//   result += '*'; // '****'  
// }

// 5+6+7+8+...+99
// let sum = 0;
// for (i = 5; i <= 99; i++) {
//   sum += i;
// }
// console.log(sum)
// console.log(i)

// const isAllCharacters = input => {
//   const allCharacters = "abcdefghijklmnopqrstuvwxyz";

//   for (let char = 0; char <= allCharacters.length; char++) {
//     let isThere = input.trim().toLowerCase().indexOf(allCharacters[char]);
//     if (isThere === -1) return false;
//   }
//   return true;
// };

// console.log(isAllCharacters("The quick brown fox jumps over the lazy dog"));


// const isWorking = (today, deadline) => !([0, 6].includes(1)) || new Date(today.setDate(today.getDate() + 1)).getDate() === new Date(deadline).getDate()
// console.log(isWorking(new Date(), '03/08/2020'))


// const convert = input => '(' + input[0] + input[1] + input [2] + ')' + ' ' + input[3] 


// INPUT = [0,1,2,3,4,5,6,7,8,9]
// (123) 456-7890

// const cond1 = true;
// const cond2 = true;

// cond1 && cond2
// cond1 || cond2
// !cond1

// const backendPort = null;
// const salary = prompt('Please enter your salary')

// const yourSalary = salary || 10000;

// let defaultUser = null;
// const currentUser = defaultUser && (defaultUser = 'guest')
// console.log(currentUser, defaultUser)

// const bmiP = 100/1.6/1.6;
// const bmiTle = 75/1.75/1.75

// const bmiP = calculateBmi(1.6, 100)

// Function Declaration
// function calculateBmi(height, weight) {
//   return weight / height / height;
// }

// const bmiTle = calBmi(1.75, 75)
// console.log(bmiTle)

// Function Expression
// const calBmi = function (height, weight) {
//   return weight / height / height;
// }

// const calBmiArrow = (height, weight) => {
//   return weight / height / height;
// }

// const calBmiArrow = (height, weight) => weight / height / height;
// const calAge = birthYear => {
//   return 2020 - birthYear;
// }

// const bmiArrow = calBmiArrow(1.8, 50)
// console.log(bmiArrow)

// เขียนฟังก์ชันให้รับค่า เงินได้สุทธิ แล้วรีเทิร์นค่าออกมาเป็นภาษีที่ต้องชำระ
// เงินได้สุทธิ < 150000 เสียภาษี 0%
// 150000 < เงินได้สุทธิ <= 300000 เสียภาษี 5% X (เงินได้สุทธิ - 150000)   ... (1)
// 300000 < เงินได้สุทธิ <= 500000 เสียภาษี 10% X (เงินได้สุทธิ -300000)   ... (2)
// 500000 < เงินได้สุทธิ เสียภาษี 15% X (เงินได้สุทธิ -500000)   ... (3)
// ภาษี = (1) + (2) + (3)

// สมมติเงินได้ 400000 จะเสียภาษี ดังนี
// (1) คิดจากยอด 150000 ถึง 300000 คิดเป็นเงิน (300000-150000) X 5% = 7500
// (2) คิดจากยอด 300000 ถึง 400000 คิดเป็นเงิน (400000-300000) X 10% = 10000
// จะเสียภาษีทั้งหมด (1) + (2) = 17500

const tleIncome = 1000000;
const sonterIncome = 475000;
const gapIncome = 298564;
const earthIncom = 138900;

const calTax = income => {
  if (income <= 150000) {
    return 0;
  }

  if (income <= 300000) {
    return (income - 150000) * 0.05;
  }

  const taxStepOne = (300000 - 150000) * 0.05;
  if (income <= 500000) {
    return (income - 300000) * 0.1 + taxStepOne;
  }

  const taxStepTwo = (500000 - 300000) * 0.1;
  return (income - 500000) * 0.15 + taxStepTwo + taxStepOne;
}

// console.log(calTax(tleIncome))
// console.log(calTax(sonterIncome))
// console.log(calTax(gapIncome))
// console.log(calTax(earthIncom))

// alert('')
// prompt('Please Enter', 'CodeCamp')

// function callB() {
//   alert('10 second past')
// }

// console.log(callB)

// setTimeout(function () {
//   alert('5 second')
// }, 5000)

// const cal

const tleFirstName = 'Wissanu';
const tleLastName = 'Kongjandee';
const tleNickName = 'tle'

// function calBmi() {
//   return this.weight / this.height / this.height
// }

// var weight = 75;
// var height = 1.8
// console.log(window)

// // window.alert()
// // tle.calBmi = calBmi;

// console.log(calBmi());

const tle = {
  firstName: 'Wissanu',
  lastName: 'Kongjandee',
  nickName: 'tle',
  height: 1.80,
  weight: 50,
  birthYear: 1995,
  calBmi: function () {
    return this.weight / this.height / this.height
  }
}

// if ('car' in tle) {
//   console.log('Tle has a car')
// } else {
//   console.log('Tle does not have a car')
// }

const car = {
  brand: 'Toyota',
  color: 'black',
  model: 'Sport',
  numWheel: 4
}

// console.log(tle.firstName)
// console.log(tle['nickName'])

tle.car = car

const keyFirstName = 'firstName'

// console.log(tle[keyFirstName]) // console.log(tle['firstName'])

// console.log(tle.firstName)
// console.log(tle['firstName'])

// tle.firstName = 'Wisx';
// tle['firstName'] = 'Wisx'

// console.log(tle.car.brand)
// console.log(tle['car'].brand)

// if ('car' in tle) {
//   console.log('Tle has a car')
// } else {
//   console.log('Tle does not have a car')
// }

// for (key in tle) { // [fisrtName, lastName, nickName, height, weight, birthYear, calBmi]
//   console.log(key, tle[key])
// }

// console.log(tle)
// delete tle.car
// console.log(tle)
// tle.birthYear = 1994;

// const tleBmi = calculateBmi(tle.height, tle.weight)

// tle.calBmi = calculateBmi

// console.log(tle.calBmi(tle.height, tle.weight))

// tle.calBmi = function () {
//   console.log(this)
//   return this.weight / this.height / this.height;
// }

// console.log(tle.calBmi())

// const obj = {}

// function Person(firstName, lastName) {
//   this.nationality = 'Thai';
//   this.job = 'student'
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.greetingIntheMorning = () => console.log('Good Morning')
// }

// function Person() {

// }

// const bank = new Person();
// const jump = new Person('C', 'D');

// console.log(Person)
// console.log(bank)
// console.log(jump)

// Q2
// function draw(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += '*';
//     }
//     result += '\n';
//   }
//   return result
// }

// Q3
// function draw(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += j + 1;
//     }
//     result += '\n';
//   }
//   return result
// }

// Q4
// function draw(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += i + 1;
//     }
//     result += '\n';
//   }
//   return result
// }

//Q5
// function draw(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += n - i;
//     }
//     result += '\n';
//   }
//   return result
// }

// Q6
// function draw(n) {
//   let count = 1;
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += count;
//       count++;
//     }
//     result += '\n';
//   }
//   return result
// }

console.log(draw(4))
