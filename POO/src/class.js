var Person = /** @class */ (function () {
    //métodos
    function Person(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.walk = function () {
        console.log("id: " + this.id + ", name: " + this.name + ",age:" + this.age + ",gender:" + this.gender);
    };
    return Person;
}());
