
/* 


---- change color li id=idNum -----

var idNum = 2;
var highlight = function(el, colour) { 
    el = document.getElementById(el) || false;
    
    if(el.style) {
        el.style.color = colour;
    }
    
    return el;
};
    
    highlight(idNum, '#f0f'); */

var players = [];
var playerName;
 


function inIt() {
    divName.style.display = "block"; 
    startText.style.display = "block";
}


function startGame() {

    var question = document.getElementById("question");
    playerName = document.querySelector('#nome').value;
    var divName = document.getElementById("divName");     
    var startText = document.getElementById("startText"); 
    divName.style.display = "none"; 
    startText.style.display = "none"; 
    question.style.display = "block"; 

    var questions = [
        [ { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre.") },
        { letter: "a", answer: "araña", status: 0, question: ("CON LA A. Arácnido de cuatro pares de patas que presenta un pequeño cefalotórax no articulado al que se une un abdomen abultado, en cuyo extremo tiene los órganos productores de seda o hileras.") },
        { letter: "a", answer: "artado", status: 0, question: ("CON LA A. Dicho de un clérigo: Que tiene tiempo limitado para ordenarse.") }
        ],
        [ { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
        { letter: "b", answer: "babaco", status: 0, question: ("CON LA B. Arbusto de la Sierra ecuatoriana, que produce fruto comestible.") },
        { letter: "b", answer: "bracamarte", status: 0, question: ("CON LA B. Espada usada antiguamente, de un solo filo y de lomo algo encorvado cerca de la punta.") }
        ],
        [ { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
        { letter: "c", answer: "cabal", status: 0, question: ("CON LA C. Dicho de una cosa: Que cabe a cada uno.") },
        {letter: "c", answer: "cuaco", status: 0, question: ("CON LA C. Persona ruda, ignorante, grosera.") }
        ],
        [ { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
        { letter: "d", answer: "dacio", status: 0, question: ("CON LA D. Tributo o imposición sobre algo.") },
        { letter: "d", answer: "deparar", status: 0, question: ("CON LA D. Suministrar, proporcionar, conceder.") },
        ],
        [ { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
        { letter: "e", answer: "ermita", status: 0, question: ("CON LA E. Capilla o santuario, generalmente pequeños, situados por lo común en despoblado y que no suelen tener culto permanente.") },
        { letter: "e", answer: "etapa", status: 0, question: ("CON LA E. Trecho de camino de un recorrido determinado.") }
        ],
        [ { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
        { letter: "f", answer: "friable", status: 0, question: ("CON LA F. Que se desmenuza fácilmente.") },
        { letter: "f", answer: "flebe", status: 0, question: ("CON LA F. Débil, flaco.") }
        ],
        [ { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
        { letter: "g", answer: "gobernalle", status: 0, question: ("CON LA G. Timón de la nave.") },
        { letter: "g", answer: "giraldilla", status: 0, question: ("CON LA G. Baile popular de Asturias y provincias inmediatas, que se ejecuta en compás binario.") }
        ],
        [{ letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
        { letter: "h", answer: "hangar", status: 0, question: ("CON LA H. Cobertizo grande, generalmente abierto, para guarecer aparatos de aviación o dirigibles") },
        { letter: "h", answer: "huaca", status: 0, question: ("CON LA H. En América Central y gran parte de la del Sur, sepulcro antiguo indio en general.") }
        ],
        [{ letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
        { letter: "i", answer: "ilapso", status: 0, question: ("CON LA I. Especie de éxtasis contemplativo, durante el cual se suspenden las sensaciones exteriores y queda el espíritu en un estado de quietud y arrobamiento.") },
        { letter: "i", answer: "isla", status: 0, question: ("CON LA I. Porción de tierra rodeada de agua por todas partes.") }
        ],
        [{ letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
        { letter: "j", answer: "jincho", status: 0, question: ("CON LA J. Drogadicto, colgado.") },
        { letter: "j", answer: "jerarquía", status: 0, question: ("CON LA J. Organización por categorías o grados de importancia entre diversas personas o cosas.") }
        ],
        [{ letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
        { letter: "k", answer: "kit", status: 0, question: ("CON LA K. Aparato o mueble que se vende en piezas separadas que han de ser montadas por el comprador.") },
        { letter: "k", answer: "kayak", status: 0, question: ("CON LA K. Canoa individual de los esquimales, hecha con piel de foca y madera.") }
        ],
        [{ letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
        { letter: "l", answer: "lúgubre", status: 0, question: ("CON LA L. Triste, funesto, melancólico, tétrico.") },
        { letter: "l", answer: "ledo", status: 0, question: ("CON LA L. Alegre, contento.") }
        ],
        [{ letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
        { letter: "m", answer: "melómano", status: 0, question: ("CON LA M. Apasionado por la música.") },
        { letter: "m", answer: "místico", status: 0, question: ("CON LA M. Persona que se dedica a la vida contemplativa y espiritual.") }
        ],
        [{ letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
        { letter: "n", answer: "nocivo", status: 0, question: ("CON LA N. Dañino,pernicioso,perjudicial.") },
        { letter: "n", answer: "nefasto", status: 0, question: ("CON LA N. Persona o cosa desgraciada o detestable") }
        ],
        [{ letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
        { letter: "ñ", answer: "niñato", status: 0, question: ("CONTIENE LA Ñ. Joven de comportamiento presuntuoso y frívolo.") },
        { letter: "ñ", answer: "caña", status: 0, question: ("CONTIENE LA Ñ. Canilla del brazo o de la pierna.") }
        ],
        [{ letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
        { letter: "o", answer: "ortodoxo", status: 0, question: ("CON LA O. Conforme con los dogmas de una religión o los principios de una ideología que considera verdaderos.") },
        { letter: "o", answer: "onírico", status: 0, question: ("CON LA O. De los sueños o relativo a ellos.") }
        ],
        [{ letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
        { letter: "p", answer: "pionero", status: 0, question: ("CON LA P. Persona que inicia la exploración de nuevas tierras.") },
        { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Persona que se dedica a actividades muy distintas y tiene múltiples aptitudes.") }
        ],
        [{ letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
        { letter: "q", answer: "quimera", status: 0, question: ("CON LA Q. Ilusión,fantasía que se cree posible,pero que no lo es.") },
        { letter: "q", answer: "quark", status: 0, question: ("CON LA Q. Tipo teórico de partículas elementales con las que se forman otras partículas,como son el protón y el neutrón.") }
        ],
        [{ letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
        { letter: "r", answer: "ridículo", status: 0, question: ("CON LA R. Que por su rareza o extravagancia produce risa.") },
        { letter: "r", answer: "rumiar", status: 0, question: ("CON LA R. Masticar por segunda vez,devolviéndolo a la boca,el alimento que ya estuvo en el estómago.") }
        ],
        [{ letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
        { letter: "s", answer: "sílfide", status: 0, question: ("CON LA S. Mujer muy hermosa y esbelta.") },
        { letter: "s", answer: "script", status: 0, question: ("CON LA S. Guión cinematográfico en el que constan todos los detalles de cada escena filmada.") },
        ],
        [{ letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
        { letter: "t", answer: "tumulto", status: 0, question: ("CON LA T. Confusión agitada o desorden ruidoso.") },
        { letter: "t", answer: "tongo", status: 0, question: ("CON LA T. En una competición, trampa por la que un participante se deja ganar, generalmente por dinero.") }
        ],
        [{ letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
        { letter: "u", answer: "ubre", status: 0, question: ("CON LA U. En los mamíferos, cada una de las mamas de la hembra.") },
        { letter: "u", answer: "utopía", status: 0, question: ("CON LA U. Proyecto, idea o sistema irrealizable en el momento en que se concibe o se plantea.") }
        ],
        [{ letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
        { letter: "v", answer: "vetusto", status: 0, question: ("CON LA V. Muy antiguo o de mucha edad.") },
        { letter: "v", answer: "vituperio", status: 0, question: ("CON LA V. Deshonra, humillación.") }
        ],
        [{ letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
        { letter: "w", answer: "sedición", status: 0, question: ("CONTIENE LA W. Alzamiento colectivo y violento contra un poder establecido.") },
        { letter: "w", answer: "seso", status: 0, question: ("CONTIENE LA W. ECerebro,masa de tejido nervioso contenida en la cavidad del cráneo.") }
        ],
        [{ letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
        { letter: "x", answer: "extravagante", status: 0, question: ("CONTIENE LA X. Fuera de lo común o rareza por ser excesivamente original.") },
        { letter: "x", answer: "anexo", status: 0, question: ("CONTIENE LA X. Tejidos, estructuras o partes accesorias de un órgano.") }
        ],
        [{ letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
        { letter: "y", answer: "sexy", status: 0, question: ("CONTIENE LA Y. Persona que tiene gran atractivo físico") },
        { letter: "y", answer: "new york", status: 0, question: ("CONTIENE LA Y. La grande manzana") },
        ],
        [{ letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
        { letter: "z", answer: "zonzo", status: 0, question: ("CON LA Z. Tonto, simple.") },
        { letter: "z", answer: "zote", status: 0, question: ("CON LA Z. Ignorante, torpe.") },
        ],
    ];
    var corrects = [];
    var incorrects = 0;
    var points = 0;
    var count = 27;
    var count2 = 0;
    var i=0;
    

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function initLoop() {

        if(count>0) {

            letterLoop();
        }
    }
    initLoop()

    function letterLoop() {

        var r = getRandomInt(3);
        var answ;
        if(i==27) {
            i = 0;
        }
        var colorLetter = document.getElementById(i);
        console.log(colorLetter);
        console.log(i);
        
        
        if(questions[i][r].status == 0 || questions[i][r].status == 3) {
            var que = questions[i][r].question;
            document.getElementById("que").innerHTML = que;
        }else if (count > 0) {
            i++;
            letterLoop();
        }
        var button = document.getElementById("btnValue");
        button.onclick = function() {
                   
            var askFor = document.querySelector('#answerId').value;
            answ = askFor.toLowerCase();
            if(questions[i][r].status == 0 || questions[i][r].status == 3) {


                if(answ == questions[i][r].answer) {

                    questions[i][0].status = 1;
                    questions[i][1].status = 1;
                    questions[i][2].status = 1;
                    corrects.push(questions[i][r].letter); 
                    points++;
                    count--;
                    i++;
                    colorLetter.style.backgroundColor = '#22c140'; 
                    console.log('giusta');
                    
                    letterLoop();                           
                    //alert('Correct, you have ' + points + ' Point!');
                    

                }else if (answ == 'pasapalabra') {

                    questions[i][0].status = 3;
                    questions[i][1].status = 3;
                    questions[i][2].status = 3;
                    i++; 
                    console.log('pass');
                    letterLoop();  
                    //alert('Pasapalabra');

                    
                
                }else if(answ !== 'pasapalabra' || answ !== questions[i][r].answer){
                    colorLetter.style.backgroundColor = '#e05050';
                    console.log('sbagliata');
                    
                    questions[i][0].status = 2;
                    questions[i][1].status = 2;
                    questions[i][2].status = 2;
                    incorrects++;
                    count--;
                    i++; 
                    letterLoop();
                    
    
                }
            } 

        }
            
    }
    
                
           
    
}
    

