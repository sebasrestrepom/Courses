
 export class Car{
    //atributos
    id:Number;
    placa:string;
    driver:String;
    passenger:Number;
    //métodos
    constructor(id:number,placa:string,driver:string,passenger:number){
        this.id =  id;
        this.placa = placa;
        this.driver = driver;
        this.passenger = passenger;
    }
   prinDataCar(){

    console.log(`driver:${this.driver}`);
    console.log(`driver name:${this.driver.name}`);
    console.log(`driver document:${this.driver.document}`);


   }
}

