//crear una fotografía
//function createPicture(title,date,size){
    //title
//}
type squareSize ='100x100'|'500x500'|'1000x1000';
//usamos ts, definimos tipos para parametros
function createPicture(title:string,date:string, size:squareSize){
console.log('create  Picture using', title,date,size);
}
/*createPicture('my birthday','2020-03-10','500x500');
createPicture('colombia trip','2020-03');*/
//parametros opcionales y funciones

function createPicture(title?:string,date?:string,size?:squareSize){
    console.log('create  Picture using', title,date,size);
    }
    createPicture('my birthday','2020-03-10','500x500');
    createPicture('colombia trip','2020-03');

    //flat array function
    let createPic = (title:string,date:string,size:squareSize):object =>{
       /* return {
            title:title,
            date:date,
            size:size,
        };*/
        return{
            title,
            date,
            size,
        };
    };

    const picture = createPic('Platzi session','2020-03-10','100x100');
    console.log('create Pic',picture);

    //tipo de retorno con typescript

    function handlerError(code:number, message:string):never | string{
        //procesamiento del código,mensaje
        if(message=== 'error'){
            throw new Error(`${message}. code error: ${code}`);

        }else{
            return 'ah errror has ocurred';
        }
    }

    try{
        let result = handlerError(200,'OK');
    console.log('result',result);
    result= handlerError(404,'error');
    console.log('result',result); 
    }catch(error){

    }
    