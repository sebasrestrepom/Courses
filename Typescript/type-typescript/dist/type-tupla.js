"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = [1, 'sebasrestrepom'];
console.log('user', user);
console.log('username', user[1]);
console.log('id', user[0]);
//tuplas con varios valores
//id,username,isPro
var userInfo;
userInfo = [2386, 'sebasrestrepom', true];
console.log('User Info', 'ID', userInfo[0], 'USERNAME', userInfo[1], 'IsPro', userInfo[2]);
var array = [];
array.push([1, 'sebasrestrepom']);
array.push([2, 'camilaperez']);
array.push([3, 'celestron']);
//cambio de valor en array
array[2][1] = array[2][1].concat('2288');
console.log('array', array);
