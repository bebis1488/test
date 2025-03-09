//создание класса
class rabbit {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
sayHi() {
alert (this.name);
    }
}
    
//создание объекта
function rabbitHi() {
    let rabbit1 = new rabbit("Lip", 2);
    rabbit1.sayHi();
}