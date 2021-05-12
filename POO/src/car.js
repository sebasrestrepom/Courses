"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    //métodos
    function Car(id, placa, driver, passenger) {
        this.id = id;
        this.placa = placa;
        this.driver = driver;
        this.passenger = passenger;
    }
    Car.prototype.prinDataCar = function () {
        console.log("driver:" + this.driver);
        //console.log(`driver name:${this.driver.name}`);
        //console.log(`driver document:${this.driver.document}`);
    };
    return Car;
}());
exports.Car = Car;
