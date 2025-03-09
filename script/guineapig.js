//создание класса
class guineapig {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
sayHi() {
alert (this.name);
    }
}
    
//создание объекта
    function guineapigHi() {
    let guineapig1 = new guineapig("Rico", 1);
    guineapig1.sayHi();
    }