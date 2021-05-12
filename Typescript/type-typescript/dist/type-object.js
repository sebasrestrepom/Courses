"use strict";
var user;
user = {};
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true,
};
console.log('user', user);
//Object vs object (clase js vs tipo ts)
var myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true,
};
var isInstance = myObj instanceof Object; //clase Object javascript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
