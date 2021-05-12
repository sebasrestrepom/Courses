export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}
class Picture {
    //Propiedades
    id: number;
    title:string;
    orientation:PhotoOrientation;


    constructor(id: number,
         title: string,
          orientation:PhotoOrientation){
              this.id = id;
              this.title = title;
              this.orientation = orientation;
          }
          //comportamiento
          toString(){
              return `[id:${this.id},
                        title:${this.title},
                        orientation:${this.orientation}]`;
          }

}
class Album {
    id: number;
    title:string;
    pictures:Picture[];
    constructor(id:number,title:string){
        this.id=id;
        this.title= title;
        this.pictures =[];
    }
    addPicture(picture:Picture){
        this.pictures.push(picture);
    }
}
const  album : Album =new Album(238654,'Personal Pictures');
const picture:Picture = new Picture(237644,'platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album',album);



//Accediendo a los miembros públicos de nuestra clase
picture.id = 100;//public
picture.title = 'Another title';//public
album.title = 'Personnal activities';
console.log('album',album);
