class Humano{
    constructor(param1, param2){
        this.nombre = param1;
        this.apellido = param2;
    }
    informacion(){
        return `Informacion completa ${this.nombre} ${this.apellido}`;
    }
    static ver(param1=null, param2=null){
        return `Información completa ${param1}`;
    }
}

console.log(new Humano("Diana", "Bautista"));

class Animal{
    constructor(esp){
        this.especie = esp;
    }
    canino(){
        return `Dientes caninos de la especie ${this.especie}`;
    }
}

let objAni = new Animal("Pajaros");
console.log(objAni.canino());

class Neardental extends Animal{
    constructor(nom,ape,esp){
        super(esp);
        this.nombre = nom;
        this.apellido = ape; 
    }
    informacio(nom,ape){
        return `Informacion completa ${this.nombre} ${nom} ${this.apellido} ${ape} ${this.canino()}`;
    }
    dientes(){
        return this.canino();
    }
}


let objHum = new Humano("Diana", "Bautista", "HUMANOS");
// console.log(objHum.informacio("Patricia", "Otálora"));
//console.log(objHum.dientes());

// objAni = new Animal("Humanos")
// console.log(objAni.canino());


// let nombres = "Diana";
// let apellidos = "Bautista Otálora";
// console.log(this.nombres);

let lista = [
    function(){
        return this;
        
    }
];
lista["name"] = "Diana Patricia Bautista Otálora";
console.log(lista);

/**Funciones flecha declaradas**/
let saludar2_f = () => `Hola mundo`;
let saludar1_f = (p3) => `Hola ${p3} como estas`;
let saludarsinparentesis = p6 => `Hola ${p6} como estas`;
let saludarmaquina = (p4,p5) => `Hola ${p4} como estas te saluda ${p5}`
let sumar = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

console.log(`Funciones flecha declaradas`);

console.log(saludar2_f());
console.log(saludarsinparentesis("Diana Patricia"));
console.log(saludar1_f("Diana Patricia"));
console.log(saludarmaquina("Diana Patricia"));
console.log(sumar(5,2));


/**Funciones declaradas**/
function saludar(param1) {
    return `Hola ${param1} cómo estás`;
}
console.log(saludar("Dianita"));


/**Funciones expresivas**/

let saludar1= function(param2) {
    return `Hola ${param2}  cómo estás`;
}
console.log(saludar1("Laurita"));

/**Funciones anónimas**/

let saludar3=function(param3="Bautista") {
    return `Hola ${param3} cómo estás`;
}
console.log(saludar3);
console.log(saludar3());

/**Funciones Callbacks**/

const fb = function(arg) {
    return `Hola ${arg} cómo estás`;    
}
const fa = function(Callbacks, p1) {
    parar:
    do {
        const i = ~~(Math.trunc(Math.random()*5));
        if(i<=1){
            return Callbacks(p1);
        }else{
            continue parar;
        }
    } while (true);
}
console.log(fa(fb, "Diana Patricia Bautista Otálora"));

/**Funciones autoejecutadas**/

const incremento = (function() {
    let num = -1;
    let nombre = [];
    return function (Callbacks) {
        let Guardar = function(p2){
            num++;
            nombre.push(p2);
            return `Hola ${p2} ${num} Cómo estás`;
        };
        let ver = function(){
            return nombre;
        };
        return eval(Callbacks);
    }
})();

console.log(incremento(`Guardar("Diana");`));
console.log(incremento(`Guardar("Miguel");`));
console.log(incremento(`Guardar("Wilmer");`));
console.log(incremento(`Guardar("Diego");`));
console.log(incremento(`Guardar("Adrian");`));
console.log(incremento(`Guardar("Andrés");`));
console.log(incremento(`Guardar("Manuel");`));
console.log(incremento(`Guardar("Hersain");`));
//console.log(incremento(`Ver`));
console.log(fa(fb, "Diana Patricia Bautista Otálora"));

