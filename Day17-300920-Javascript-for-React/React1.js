// function sum(a, b) {        // ฟังก์ชันประกาศแค่ 2 Parameters
//     return a + b;
// }
// console.log(sum(1, 2, 3, 4, 5));  // แต่เวลาเรียกจะใส่กี่ Arguments ก็ได้


// function sumAll(...args) { // args คือชื่อของ array ที่เก็บ Parameters ไว้
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
// }
// console.log(sumAll(1)); // 1
// console.log(sumAll(1, 2)); // 3
// console.log(sumAll(1, 2, 3)); // 6


// function mergeChar(...args) {
//     let character = '';
//     for (let arg of args) character += arg;
//     return character;
// }
// console.log(mergeChar("G", 'o', "o", 'g', "l", 'e'));


// function showName(firstName, lastName, ...titles) {
//     console.log(firstName + ' ' + lastName);// Julius Caesar
//     // ที่เหลือ (the rest) กลายเป็น array ชื่อ titles
//     // เช่น titles = ["Consul", "Imperator"]
//     console.log(titles[0]);
//     console.log(titles[1]);
//     console.log(titles.length);
// }
// showName("Julius", "Caeser", "Consul", "Imperator");


// function showNumber(first, second, ...numbers) {
//     console.log(numbers);
//     console.log(arguments);
// }
// showNumber(1, 2, 3, 4, 5, 6);


// let arr = [3, 5, 1];
// console.log(arr);
// console.log(...arr);
// console.log(Math.max(...arr));


// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(...arr1, ...arr2);
// console.log(Math.max(...arr1, ...arr2));
// console.log(1, -2, 3, 4, 8, 3, -8, 1);
// console.log(Math.max(1, -2, 3, 4, 8, 3, -8, 1));

// console.log(1, ...arr1, 2, ...arr2,25);
// console.log(Math.max(1, ...arr1, 2, ...arr2,25));
// console.log(1, 1, -2, 3, 4, 2, 8, 3, -8, 1, 25);
// console.log(Math.max(1, 1, -2, 3, 4, 2, 8, 3, -8, 1, 25));


// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr, 2, ...arr2];
// // merged = [0, 3, 5, 1, 2, 8, 9, 15];
// console.log(merged); // 0,3,5,1,2,8,9,15


// let arr = [1, 2, 3];
// let arrCopy = [...arr];
// arr.push(4);
// console.log(arr);
// console.log(arrCopy);

// Destructuring
// let [firstName, , title] = ["Julius", "Caeser", "Consul", "Of the Roman Republic"];
// console.log(title);


// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");
// console.log(user);
// for (let [key, value] of user) {
//     console.log(`${key}:${value}`); // name:John, then age:30
// }


// let [name = prompt('name?'), surname = promot('surname?')] = ["Julius"];
// alert(name);
// alert(surname);


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };
// let { title, width, height } = options;
// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };
// // { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;
// // width -> w
// // height -> h
// // title -> title
// console.log(title);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200


let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
// destructuring assignment split in multiple lines for clarity
let {
    size: { // put size here
        width,
        height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
} = options;
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
