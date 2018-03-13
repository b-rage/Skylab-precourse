/*
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:

Si eres ADMIN, la función debería permitir:

Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:

Buscar por precio ( más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responderá: "Gracias por su compra, vuelva pronto."*/

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//console.log(flights[0].to) //output: New York

function skyAir() {
    var a;
    function welcome() {

        var myName = prompt('escribe tu nombre');
        console.log('Hola ' + myName + ' Bienvenido!!');

    }
    welcome();

    function totalFlight() {
        
        flights.forEach(function(ob) {
            if(!ob.scale) {
                a = 'no realiza ninguna escala.';
            }else{
                a = 'realiza escala.';
            }
            console.log('El vuelo con origen: ' + ob.to + ', y destino ' + ob.from + ' tiene un coste de ' + ob.cost + ' € y ' + a);
        })
    }
    totalFlight();

    function averageCost() {
        var acc = 0;
        flights.forEach(function(obj) {
            acc += obj.cost;
        })
        var averageCost = acc / flights.length;
        console.log('El coste medio del los vuelos es: ' + averageCost + ' €');
       
        
    }
    averageCost()

    function flightScale() {
        var count = 0;
        flights.forEach(function(o) {
            
            if(o.scale) {
                count += 1;
            }
        })
        console.log('Hay ' + count + ' vuelos que realizan escalas');
    }
    flightScale()

    function las5flights() {
        for(var j=0; j<flights.length/2; j++) {
            console.log(flights[j].from);
            } 
        
    }
    console.log('Los ultimos 5 vuelos de hoy son: ');
    las5flights()

    var admin = prompt('si eres ADMIN escribe A, si eres user escribe U');

    function userF() {
        function lowCostFly() {
             arrCost = [];
             flights.forEach(function(obj) {
                 arrCost.push(obj.cost);
             })
            
            var min = Math.min.apply(Math, arrCost);
            var idL = arrCost.indexOf(min);
            console.log('El coste minimo de un vuelo es: ' + min + ' €')
            console.log( 'ID: ' + flights[idL].id + ' - Vuelo con origen ' + flights[idL].to + ', y destino ' + flights[idL].from + ' tiene un coste de ' + flights[idL].cost + ' € y ' + a);
            console.log("Gracias por su compra, vuelva pronto.");
        }
        lowCostFly();
    }

    var adminM = admin.toUpperCase();
    switch(adminM) {
        case 'A':
            adminF();
            break;
        case 'U':
            userF();
            break; 
    }


}

skyAir();