//función para mostrar fotografía
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Picture{
    title:string;
    date:string;
    orientation:PhotoOrientation;
}
function showPicture(picture:{
    title:string,
    date:string,
    orientation:PhotoOrientation}){
console.log(`[title: ${picture.title}, 
                date: ${picture.date},
                orientation:${picture.orientation}]`);
}
let myPic={
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test title',
    date:'2020-03',
    orientation:PhotoOrientation.Portrait,
    //extra:'test',
});

interface PictureConfig{
    title?:string;
    date?:string;
    orientation?:PhotoOrientation;
}
function generatePicture(config:PictureConfig){
    const pic = {title:'default',date:'2020-03'};
    if(config.title){
        pic.title =config.title;

    }
    if(config.date){
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture',picture);


//interfaz: usuario
interface user{
     readonly id:number;//debido a que puede ser llave foranea en base de datos, debe ser solo de lectura y no se debe permitir su update.
    username:string,
    isPro:boolean;
}

let user: User;
user = {id:2386,username:'sebasrestrepom',isPro:true};
console.log('user',user);
user.username = 'sebasrestrepo';

console.log('user',user);
