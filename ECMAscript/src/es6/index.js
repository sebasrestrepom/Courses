function hola(name, age, country){
var name = name ||'oscar';
var age = age || '22';
var country = country || 'colombia';
console.log(name, age, country);
}
//es6
function hola (name = 'oscar', age ='22', country ='CO'){
	console.log(name,age,country);
}
hola();
hola( 'sebastian','30','mx');


let hello = "hola amigos";
let world = "de youtube";
var saludo = `${hello} ${world} `;
console.log(saludo);


var lorem = `esta es una línea de texto la cuál,
debe estar separada de esta otra
`;
console.log(lorem);


const names =[
{
	name:'oscar',
	age:'32',}
	{
		name:'yesica',
		age:'29',
}]
let listOfNames = names.map(function(item){
	console.log(item.name);
})

let listOfNames2 =names.map(item=> console.log(item.name));

const listOfNames3 = (name, age, country) =>{
	...
}

const listOfNames4 = name =>{
	...
}
const square = num => num * num;



const helloPromise  = () => {
	return new Promise ((resolve, reject) =>{
		if (true) {
			resolve('hey');
		}else{
			reject('ups');
		}
	});
}
helloPromise()
	.then(response => console.log(response))
	.catch(error => console.log(error));






class calculator {
	constructor(){
		this.valueA = 0;
		this.valueB = 0;
	}
	sum(valueA,valueB){
		this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA + this.valueB;
	}
}

const calc = new calculator();
console.log(calc.sum(2,2));

import{hello} from './module';
hello();




function* helloWorld(){
	if (true) {
		yield 'hello, ';
	}
	if (true) {
		yield 'world';
	}
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
