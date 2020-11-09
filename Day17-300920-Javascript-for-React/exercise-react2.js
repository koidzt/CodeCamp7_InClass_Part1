// แบบฝึกหัด
// 2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
		// pockets → bed → table → head.
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};



// 3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป 
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
rabbit


