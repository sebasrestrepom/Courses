//Scope Global
var hello = 'hello';
var hello = ' hello +';
let world = 'hello world';
// let y cons no se pueden reasignar los valores, solo var
const helloWorld = 'hello world!';



const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}


anotherFunction();
//----------------------------------
//Asignar una variable global dentro  de un Scope que debería ser local
const helloWorld = () =>{
    //es una mala práctica.
 globalVar = 'i´m global'   
}
helloWorld();
console.log(globalVar);

const anotherFunction = () =>{
    var localVar = globalVar = 'i´m  global'
}
anotherFunction();
console.log(globalVar );

//------------------------------