class Person {
    //atributos
    id:number;
    name:string;
    age: number;
    gender: string;
   
    //métodos
    constructor(id:number,name:string,age:number,gender:string){
        this.id =id;
        this.name =name;
        this.age = age;
        this.gender = gender;
    }
    walk (){
        console.log(`id: ${this.id}, name: ${this.name},age:${this.age},gender:${this.gender}`);
    }

    
}

