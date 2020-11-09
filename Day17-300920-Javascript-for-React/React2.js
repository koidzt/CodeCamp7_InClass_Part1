// let user = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// // set fullName is executed with the given value.
// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper



// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// // Object.keys คืนค่าแค่ keys ของมันเอง
// console.log(Object.keys(rabbit)); // jumps

// // for..in loops คืนค่าทั้ง keys ของมันและ key ที่ถูกถ่ายทอดมาด้วย
// for (let prop in rabbit) console.log(prop); // jumps, then eats

