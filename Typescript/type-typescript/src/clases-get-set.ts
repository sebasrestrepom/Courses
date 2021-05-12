export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}

//get y set



class Picture {
    //Propiedades
    private _id: number;
    private _title:string;
    private _orientation:PhotoOrientation;


    constructor(id: number,
         title: string,
          orientation:PhotoOrientation){
              this._id = id;
              this._title = title;
              this._orientation = orientation;
          }
          get id(){
              return this._id;
          }
          set id(id:number){
              this._id = id;

          }
          get title(){
              return this._title;
          }
          set title(title:string){

            this._title = title;
          }
          get orientation(){
            return this._orientation;
        }
        set orientation(orientation:PhotoOrientation){

          this._orientation = 0;
        }



          //comportamiento
          toString(){
              return `[id:${this.id},
                        title:${this.title},
                        orientation:${this.orientation}]`;
          }

}
class Album {
   private _id: number;
    private _title:string;
    private pictures:Picture[];
    
    constructor(id:number,title:string){
        this._id=id;
        this._title= title;
        this.pictures =[];
    }

    get id(){
        return this._id;
    }
    set id(id:number){

      this._id = 0;
    }
    get title(){
        return this._title;
    }
    set title(t:string){

      this._title = t;
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
console.log('picture.id', picture.id);
picture.id = 100;//public
picture.title = 'Another title';//public
album.title = 'Personnal activities';
console.log('album',album);
