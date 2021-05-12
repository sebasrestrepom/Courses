export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}
interface Entity{
    id:number;
    title:string;
}
interface Album extends Entity {
//COPIA ATRIBUTOS DE ENTITY
    description: string;
}
interface Picture extends Entity {
    orientation: PhotoOrientation;
}
const album:Album ={
    id:2386,
    title:'Meetups',
    description:'Community events around the world',

};
const picture:Picture={
    id:4549,
    title:'Family',
    orientation: PhotoOrientation.Landscape,
};
let newPicture = {} as Picture;

newPicture.id = 2356;
newPicture.title= 'Moon';
console.log('album', album);
console.log('picture',picture);
console.log('newPicture',newPicture);
