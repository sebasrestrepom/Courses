const fruits = () =>{
    var fruit = 'apple';
    console.log(fruit);
}
fruits();



const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;
    /* let y const no se pueden reasignar, como recomendación
    se debe trabajar con let y cons para garantizar que funcionen y no se reasignen las variables*/
    console.log(x);
    console.log(y);
    
}
anotherFunction();