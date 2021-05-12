const obj ={
	name :'oscar',
	age:34,
	country: 'mx',
};
let { name, ...all } = obj;
console.log(name, all); 


const obj ={
	name:'oscar',
	age:27,
}

const obj2 ={
	...obj,
	country:'mx',
}
 console.log(obj2);




 const helloWorld = () => {
 	return new Promise((resolve, reject)=>{
 		(true)
 		? setTimeout(() => resolve('hello world'), 3000)
 		: reject(new Error('Test error'))
 	});
 };
 helloWorld()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .finally(() => console.log('finalizado'))


 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2018-04-20');
 const year = match[1]
 const month =match[2]
 const day = match[3]
 console.log(year, month, day);