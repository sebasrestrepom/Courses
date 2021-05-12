

//Explicito
let phone : number;
phone =3125672;
//Inferido

let phoneNumber = 312678365;

let hex: number =0xf00d;
let binary:number = 0b10101;
let octal : number= 0o744;


// tipo boolean
//tipo explicito
let isPro: boolean;
isPro= true;


let username: string = 'sebastián';


let userInfo:string;

userInfo =`
User Info:
username: ${username}
firstName: ${username+'restrepo'}
phone: ${phone}
isPro: ${isPro}
`;
console.log('userInfo', userInfo);
