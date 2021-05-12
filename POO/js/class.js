"use strict";
class Person {
    //métodos
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    walk() {
        console.log(`id: ${this.id}, name: ${this.name},age:${this.age},gender:${this.gender}`);
    }
}
