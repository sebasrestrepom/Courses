"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    //métodos
    constructor(id, placa, driver, passenger) {
        this.id = id;
        this.placa = placa;
        this.driver = driver;
        this.passenger = passenger;
    }
    prinDataCar() {
        console.log(`driver:${this.driver}`);
        //console.log(`driver name:${this.driver.name}`);
        //console.log(`driver document:${this.driver.document}`);
    }
}
exports.Car = Car;
