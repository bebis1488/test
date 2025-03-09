//создание класса
class chinchilla {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
sayHi() {
alert (this.name);
    }
}
    
//функция
function chinchillaHi() {
    let chinchilla1 = new chinchilla("Boni", 1); //создание объекта
    chinchilla1.sayHi(); //вызов метода
}

