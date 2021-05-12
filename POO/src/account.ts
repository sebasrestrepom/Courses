
export class Account{
    //atributos
    id:number;
    name:string;
    document:number;
    email:string;
    password:string;
    //metodos
    constructor(id:number,name:string,document:number,email:string,password:string){
        this.id = id;
        this.name = name;
        this.document= document;
        this.email = email;
        this.password= password;
    }

}