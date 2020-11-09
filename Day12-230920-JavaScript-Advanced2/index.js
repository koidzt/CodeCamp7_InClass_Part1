// console.log(`วิธีการเขียนตัวเลข กรณี หลีกเลี่ยงการเขียน 0 ยาว ใช้ e แทน 10 ยกกำลัง`)
// let billionA = 100000000;
// let billionB = 1e9;
// let billionC = 7.3e9;
// let billionD = 2e-3;


// console.log(`ตัวเลขฐาน 16(Hex), ฐาน 8(Octal), ฐาน2(Binary)`);
// let hex = 0xff;
// let octal = 0b11111111; // binary form of 255
// let binary = 0o377; // octal form of 255
// console.log( `hex = ${hex}\noctal = ${octal}\nbinary  = ${binary}` );
// console.log( `octal = binary  : ${octal === binary} `); // true, the same number 255 at both sides


// console.log(`toString(ประเภทเลขฐาน)`);
// let num = 255; 
// console.log( num.toString(16) ); // ff
// console.log( num.toString(2) ); // 11111111
// console.log( num.toString() ); // 255


// console.log(`Rounding - การปัดเศษ`);

// console.log(`Math.floor(ตัวเลข)  ปัดเศษลงทั้งหมด`);
// console.log(Math.floor(3.6)); // output:3
// console.log(Math.floor(3.1)); // output:3
// console.log(Math.floor(-1.6)); // output:-2
// console.log(Math.floor(-1.1)); // output:-2


// console.log(`Math.ceil(ตัวเลข)  ปัดเศษขึ้นทั้งหมด`);
// console.log(Math.ceil(3.6)); // output:4
// console.log(Math.ceil(3.1)); // output:4
// console.log(Math.ceil(-1.6)); // output:-1
// console.log(Math.ceil(-1.1)); // output:-1

// console.log(`Math.round(ตัวเลข)  ตั้งแต่  .5 ปัดขึ้นทั้งหมด หากน้อยกว่า .5 ปัดลง`);
// console.log(Math.round(3.5)); // output:4
// console.log(Math.round(3.1)); // output:3
// console.log(Math.round(-1.6)); // output:-2
// console.log(Math.round(-1.1)); // output:-1


// console.log(`Math.trunc(ตัวเลข)  ตัดทศนิยมทิ้ง`);
// console.log(Math.trunc(3.6)); // output:3
// console.log(Math.trunc(3.1)); // output:3
// console.log(Math.trunc(-1.6)); // output:-1
// console.log(Math.trunc(-1.1)); // output:-1

// console.log(`Math.toFixed(จำนวนทศนิยม)  เลือกจำนวนทศนิยมที่แสดง โดยจะปัดเศษแบบ round`);
// let num2 = 12.34;
// console.log( num2.toFixed(1) ); // "12.3"
// let num3 = 12.36;
// console.log( num3.toFixed(1) ); // "12.4"
// let num4 = 12.34;
// console.log( num4.toFixed(5) ); // "12.34000"

// console.log(`Imprecise calculations (การคำนวณที่ไม่แม่นยำ)`);
// console.log( 0.1 + 0.2 == 0.3 ); // false
// console.log( 0.1 + 0.2 ); // 0.30000000000000004

//---------------------------------End Number-------------------------------------



//--------------------------------Start String------------------------------------

//---------------------------------End String-------------------------------------



//---------------------------------Start Array------------------------------------
const person = ['a','b','c']
console.log(person);
//----------------------------------End Array------------------------------------






