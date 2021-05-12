//tipo explicito
let idUser: any;
idUser =1;//number
idUser='1';
console.log('idUser', idUser);


//tipo inferido
let otherId;
otherId =1;
otherId = '1';
console.log('otherId', otherId);

let surprise: any = 'hello typescript';
//surprise.sayHello();//error
const res = surprise.substring(6);//error
console.log('res',res);


