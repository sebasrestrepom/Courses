"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", \n                date: " + picture.date + ",\n                orientation:" + picture.orientation + "]");
}
var myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    //extra:'test',
});
function generatePicture(config) {
    var pic = { title: 'default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('picture', picture);
var user;
user = { id: 2386, username: 'sebasrestrepom', isPro: true };
console.log('user', user);
user.username = 'sebasrestrepo';
console.log('user', user);
