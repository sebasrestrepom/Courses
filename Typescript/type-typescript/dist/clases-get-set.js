"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//get y set
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    Object.defineProperty(Picture.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = 0;
        },
        enumerable: false,
        configurable: true
    });
    //comportamiento
    Picture.prototype.toString = function () {
        return "[id:" + this.id + ",\n                        title:" + this.title + ",\n                        orientation:" + this.orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (t) {
            this._title = t;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(238654, 'Personal Pictures');
var picture = new Picture(237644, 'platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros públicos de nuestra clase
console.log('picture.id', picture.id);
picture.id = 100; //public
picture.title = 'Another title'; //public
album.title = 'Personnal activities';
console.log('album', album);
