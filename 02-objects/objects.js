/*JS Objects
Reference:
http://www.w3schools.com/js/js_objects.asp

Simple JS Object for example.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
console.log(avenger.name) // "Tony"
Working with objects

Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

http://javascript.info/tutorial/objects

https://www.w3.org/wiki/Objects_in_JavaScript //Try to do the exercise of calculate the area of triangle */

//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

function keysName() {
    console.log(Object.keys(avenger));
}
keysName();
//name, class, id


//b) Ahora, crea una función que liste solo los valores de las propiedades.

function keysValue() {
    for( prop in avenger) {
        console.log(avenger[prop]);
        
    }
}
keysValue();
//Tony, VII, 01

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = 'XI';
console.log('New class = ' + avenger.class); //new class = XI

//d) Ahora, elimina la propiedad ID y asegura los cambios.
function removeID() {
    delete avenger.id;
    
}
removeID();
console.log(avenger) //Not exist :(
//e) Añade una nueva propiedad, por ejemplo city y dale un valor.
avenger.city = 'New York';
//http://www.w3schools.com/js/js_properties.asp

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

console.log('City => ' + avenger.city) // City => New York City

//f) Lista el numero de propiedades que contiene el objeto.
console.log(Object.keys(avenger).length);



//g) Cambia la propiedad name por fullName.
avenger.fullName = avenger.name + ' Stark';
delete avenger.name;
delete avenger.city;
delete avenger.class;
avenger.class = 'XI';
avenger.city = 'New York';
//g1) Asegura los cambios.

console.log(avenger.fullName) // Tony Stark

//h) Lista todas las propiedades del objeto a través de un console.log()
for(prop in avenger) {
    console.log(avenger[prop]);
    
}
// "Hi there, I'm Tony Stark..."
console.log('--------');

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
avenger.markAverage = '23';
avenger.country = 'USA';
avenger.job = 'Developer';
avenger.studies = 'PhD';
//h2) Asegura los cambios volviendo a listar los valores del objeto
for(prop in avenger) {
    console.log(avenger[prop]);
    
}

/*
//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
/*
http://www.w3schools.com/js/js_object_definition.asp

Example:

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)*/
function myAvenger(fullName, classRoom, city, job, studies,markAv) {

    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    this.listProperties = function(){
        console.log(this.fullName + ", " + this.classRoom +', ' + this.city + ', ' + this.job + ', ' + this.studies + ', ' + this.markAv) 
    }
    //
    this.listNames = function(){
        var globalAvengerArray = [];
        globalAvengerArray.push(this.fullName) 
        console.log(globalAvengerArray);
            
    }


   
} 
var tonyStark = new myAvenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)
//j) Crea otro objeto y imprime sus propiedades por pantalla.
var giaBrag = new myAvenger ("Gianluca Bragaglia", "X", "BCN", "Developer", "SkyLab", 10)
for(prop in giaBrag) {
    console.log(giaBrag[prop])
}

//var otherAvenger = new Avenger...
//console.log(otherAvenger) // Hulk...
/*k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:

...
...
...
this.listProperties: function(){
    console.log(this.name + ", " + this.class) 
};
}
Spoiler!  */
giaBrag.listProperties();

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
giaBrag.listNames();


//console.log(someFunction) // Tony Stark, Hulk, Thor...
//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

//console.log(myFunction) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
//Hint: Intenta tener a todos los objetos dentro de una array, al tener todos los datos juntos, podrás filtrarlos y mostrarlos...

//Resources => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control => https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

//console.log(myFunction()) 
// HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better
//ñ1) Intenta crear las parejas de forma aleatoria.

//Hint=> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random

