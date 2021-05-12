"use strict";
//tipo explicito
var idUser;
idUser = 1; //number
idUser = '1';
console.log('idUser', idUser);
//tipo inferido
var otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
var surprise = 'hello typescript';
//surprise.sayHello();//error
var res = surprise.substring(6); //error
console.log('res', res);
