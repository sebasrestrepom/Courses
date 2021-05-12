"use strict";
//usamos ts, definimos tipos para parametros
function createPicture(title, date, size) {
    console.log('create  Picture using', title, date, size);
}
/*createPicture('my birthday','2020-03-10','500x500');
createPicture('colombia trip','2020-03');*/
//parametros opcionales y funciones
function createPicture(title, date, size) {
    console.log('create  Picture using', title, date, size);
}
createPicture('my birthday', '2020-03-10', '500x500');
createPicture('colombia trip', '2020-03');
//flat array function
var createPic = function (title, date, size) {
    /* return {
         title:title,
         date:date,
         size:size,
     };*/
    return {
        title: title,
        date: date,
        size: size,
    };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('create Pic', picture);
//tipo de retorno con typescript
function handlerError(code, message) {
    //procesamiento del código,mensaje
    if (message === 'error') {
        throw new Error(message + ". code error: " + code);
    }
    else {
        return 'ah errror has ocurred';
    }
}
try {
    var result = handlerError(200, 'OK');
    console.log('result', result);
    result = handlerError(404, 'error');
    console.log('result', result);
}
catch (error) {
}
