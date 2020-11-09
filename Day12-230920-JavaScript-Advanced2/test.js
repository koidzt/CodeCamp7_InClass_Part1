// //exercise Number
// function random(min, max) {
//     return (Math.random() * (max-1)) + min;
// };
// alert( random(1,5));

// //exercise String 1
// function ucFirst(string) {
//     return string.slice(0, 1).toUpperCase() + string.slice(1);
// };
// let str = prompt('enter string');
// alert(ucFirst(str));

// //exercise String 2
// function checkSpam(string){
//     if(string.includes('xxx') === true || string.includes('viagra') === true){
//         return true;
//     }
//     return false;
// };
// let str = prompt('enter string');
// alert(checkSpam(str));

//exercise String 3
// function truncate(str, maxlenght){
//     if(str.length >= maxlenght){
//         return str.slice(0,maxlenght)+'...';
//     }
//     return str;
// };
// let str = prompt('enter string');
// // alert(str.length);
// let maxlength = +prompt('enter num for max of length');
// alert(truncate(str,maxlength));

// //exercise String 4
// function extractCurrencyValue(str, rate) {
//     return +str.slice(1)*rate;
// }
// alert(extractCurrencyValue('$120', 30.5));

// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
//exercise Array 1.1
// const array1 = [1, 2, 30, 400];
// /* const array2 = array1.map(item => item *=2);
// console.log(array2); */
// let array2 = array1.map(function (item, index, array1) {
//     return item = item * 2;
// });

//exercise Array 1.2
// const array1 = [1, 2, 3, 4];
/* const array2 = array1.map(item => item.toString());
console.log(array2); */
// let array2 = array1.map(function (item, index, array1) {
//     return item.toString;
// });

//exercise Array 1.3
// const array1 = [1, "1", 2, {}] ;
// const array2 = array1.map(item => typeof item);
// console.log(array2); 

//exercise Array 1.4
// const array1 = ["apple", "banana", "orange"];
// let array2 = array1.map(item => item.toUpperCase());
// console.log(array2); 

//exercise Array 1.5
// const array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
// ];
// let array2 = array1.map(item => item.name);

//exercise Array 1.6
// const array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
// ];
// let array2 = array1.map(item => item.age);

//exercise Array 1.7
// const array1 = [
//     { name: "apple", surname: "London" },
//     { name: "banana", surname: "Bangkok" },
//     { name: "watermelon", surname: "Singapore" },
// ];
// let array2 = array1.map(item => `${item.name} ${item.surname}`);

//exercise Array 1.8
// const array1 = [1,3,4,5,6,7,8]; //array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
// let array2 = array1.map(item => {
//     if (item%2 === 0){
//         return 'even';
//     }
//     return 'odd';
// });

//exercise Array 1.9
// const array1 = [1, -3, 2, 8, -4, 5]; //array2 [1, 3, 2, 8, 4, 5]
// let array2 = array1.map(item => {
//     if (item < 0) {
//         return -item;
//     }
//     return item;
// });


//exercise Array 1.10
const array1 = [100, 200.25, 300.84, 400.3]; //array2 ["100.00", "200.25", "300.84", "400.30"]
let array2 = array1.map(item => item.toFixed(2));


//exercise Array 1.11
// const array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ];
/* array2 [
    { name: "apple", birth: "2000-01-01", age: 19 },
    { name: "banana", birth: "1990-10-01", age: 29 },
    { name: "watermelon", birth: "1985-12-01", age: 33 },
   ]; */



//exercise Array 1.12
// const array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
// ];
// let array2 = array1.map(function (item,index,array1){
//     return `<tr> <td>${item.name}</td> <td>${item.birth}</td> </tr>`;
// })


// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
//exercise Array 2.1



//exercise Array 2.6
// const array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
// ];
// let array2 = array1.filter(item => item.age !== 32);
