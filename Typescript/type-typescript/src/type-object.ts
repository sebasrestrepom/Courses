let user : object;
user = {};


user = {
    id : 1,
    username:'paparazzi',
    firstName:'Pablo',
    isPro:true,
};
console.log('user', user);
//Object vs object (clase js vs tipo ts)
const myObj ={
    id : 1,
    username:'paparazzi',
    firstName:'Pablo',
    isPro:true,
};
const isInstance = myObj instanceof Object;//clase Object javascript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);