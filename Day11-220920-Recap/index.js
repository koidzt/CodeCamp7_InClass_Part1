// การประกาศ Function แต่ละแบบ
/* 
function calculateBmi(height,weight) {
    return weight/height/height;
}

const calBmi = function(height,weight) {
    return weight/height/height;
}

const calBmiArrow = (height,weight) => weight/height/height;
*/
//calculateBmi === calBmi === calBmiArrow



// let tax = 0;
// const calTax = function(income) {
//     if(income < 150000){
//         return tax;
//     } else if (income < 300000) {
//         tax = (income-150000)*0.05;
//         return tax;
//     } else if (income < 500000) {
//         tax = (150000*0.05)+((income-300000)*0.1);
//         return tax;
//     } else {
//         tax = (150000*0.05)+(200000*0.1)+((income-500000)*0.15);
//         return tax;
//     }
// }

// const calTax = function(income) {
//     if(income < 150000){
//         return 0;
//     } else if (income < 300000) {
//         return (income-150000)*0.05;
//     } else if (income < 500000) {
//         return (150000*0.05)+((income-300000)*0.1);
//     } else {
//         return tax = (150000*0.05)+(200000*0.1)+((income-500000)*0.15);
//     }
// }


const tleIncome = 1000000;
const sonIncome = 475000;
const gapIncome = 298564;
const earthIncome = 138900;

// console.log(`Tle's tax : ${calTax(tleIncome)}`);
// console.log(`Son's tax : ${calTax(sonIncome)}`);
// console.log(`Gap's tax : ${calTax(gapIncome)}`);
// console.log(`Earth's tax : ${calTax(earthIncome)}`);


function calculateTax (income) {
    if(income < 150000){
        return 0;
    } else if (income < 300000) {
        return (income-150000)*0.05;
    } else if (income < 500000) {
        return (150000*0.05)+((income-300000)*0.1);
    } else {
        return tax = (150000*0.05)+(200000*0.1)+((income-500000)*0.15);
    }
}

console.log(`Tle's tax : ${calculateTax(tleIncome)}`);
console.log(`Son's tax : ${calculateTax(sonIncome)}`);
console.log(`Gap's tax : ${calculateTax(gapIncome)}`);
console.log(`Earth's tax : ${calculateTax(earthIncome)}`);




// /*(1) const calBmi = function(height, weight) {
//     return this.weight/this.height/this.height;
// }; */
const koi = {
    firstName: 'Thanawan',
    lastName: 'Panitpongsri',
    nickName: 'Koi',
    height: 1.67,
    weight: 62,
    birthYear: 1992,
    // (1.1)calBmi,
    calBmi: function() {//(3)
        return this.weight/this.height/this.height;
    }
};

const car = {
    brand: 'Suzuki',
    model: 'Swift',
    color: 'Blue',
};

// (2 test) const koiBmi = calBmi(koi.height, koi.weight);
// (1.2) koi.calBmi = calBmi;

