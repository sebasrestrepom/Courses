const data={
	frontend:'oscar',
	backend:'isabel',
	design:'ana',
}
 const entries = Object.entries(data);
 console.log(entries);
let TextoData = 'El número de datos es: ';
let CantidadData = entries.length;
let PrintData = `${TextoData} ${CantidadData}`;
console.log(PrintData);
 

const data={
	frontend:'oscar',
	backend:'isabel',
	design:'ana',
}

const values = Object.values(data);
console.log(values);

console.log(values.length);


const string = ' hello';
console.log(string.padStart(8,'hi'));
console.log(string.padEnd(12,'-----'));
console.log('food'.padEnd(12,'-----'));


const helloWorld = ()=>{
	return new Promise((resolve,reject) =>{
		(true)
		? setTimeout(()=> resolve('hello world'), 3000)
		: reject(new Error('Test error'))
	})
	};
	const helloAsync = async () => {
		const hello = await  helloWorld();
		console.log(hello);
	}
	helloAsync();



const anotherFunction = async () =>{
	try{
		const hello = await helloWorld();
		console.log(hello);

	}catch (error){
		console.log('error');
	}
};
anotherFunction();