// let user = {
//     name: "John",
//     age: 30
// };

// user.sayhi = function() {
//     console.log("สวัสดีครับ วันนี้วันที่ 21 เดือน 9 ปี 2020")
// }

// user = {
//     sayHi: function() {
//         alert("Hello");
//     }
// };

// user = {
//     sayHi() {
//         alert("Hello");
//     }
// };

// Methods ของ Object
// แบบฝึกหัด 6.6 ข้อ 3
// let calculator = {
//     read() {
//          this.num1 = +prompt("Enter first number");
//          this.num2 = +prompt("Enter first second");
//     },
//     sum() {
//       return  this.num1 + this.num2;
//     },
//     mul() {
//       return  this.num1 * this.num2;
//     }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());



// 7. Constructor กับ New
// แบบฝึกหัด 7.4. ข้อ 1
// สร้าง constructor function ที่ใช้สำหรับ
// สร้าง Calculator โดยต้องมี 3 Methods นี
// read(): รับค่าจาก propmt สองตัว
// sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
// mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว้

// let Calculator = function() {
//     this.read = function() {
//       this.num1 = +prompt("enter first number");
//       this.num2 = +prompt("enter second number");
//     },
//     this.sum = function() {
//       return this.num1 + this.num2;
//     },
//     this.mul = function() {
//       return this.num1*this.num2;
//     }
//   };
// let cal = new Calculator();

// 7.4.  แบบฝึกหัด ข้อ 2
function Accumulator(startingValue)
{   this.value = Number(startingValue);
    this.read = function()
    {
        const number = Number(prompt("Enter Number"));
        this.value += number;
    }
}



