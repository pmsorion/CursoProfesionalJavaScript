console.log('hello, typescript');

//Boolean
let muted: boolean = true;
muted = false;
//esto no lo deja hacer
//muted ='callado';

//numeros
let age = '6';
let numerador: number = 42;
let denominador: number = 6;
//error
//let denominador1: number = age;
let resultado = numerador / denominador;

//string
let nombre: string = 'Francisco';
let saludo = `Mi nombre es: ${nombre}`;

//arreglos
//aqui defino un arreglo tipo string y esta vacio
//eb el momento de la definicion
let people: string[] = [];

people = ["Isabel", "Nicole", "Liz"];
//con los metodos asociados a un arrelgo tambien nos muestra error
//people.push(9000);
people.push('9000');

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Fran');
peopleAndNumbers.push(90001);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde ="Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Verde;
console.log(`mi color favorito es ${colorFavorito}`)

//Any para que acepte cualquier tipo de dato
let comodin: any = 'Joker';
comodin = { Type: 'Wildcard'};

// Object
let someObject: object = { Type: 'Wildcard'};


// With strictNullChecks set to true
// let a: null = null; // Ok
// let b: undefined = null; // Error
// let c: number = null; // Error
// let d: void = null; // Error
 
// // With strictNullChecks set to false
// let e: null = null; // Ok
// let f: undefined = null; // Ok
// let g: number = null; // Ok
// let h: void = null; // Ok



let a: number = 12;
let b: number = 17;
 
function showProduct(first: number, second: number): void {
    console.log("The product is: " +  first * second);
}
 
showProduct(a, b);

let fullNames: string = `Bob Bobbington`;
let ages: number = 37;
let sentence: string = `Hello, my name is ${ fullNames }.

I'll be ${ ages + 1 } years old next month.`;

console.log(sentence);

let sentences: string = "Hello, my name is " + fullNames + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

    console.log(sentences);



// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

console.log(x[0].substring(1)); // OK


function add(a: number, b: number): number {
    return a + b;
}

const sum = add(5, 9);

console.log(sum);

//cuando una funcion llama a otra funcion, en este caso
// despues de declarada la primera funcion ponemos entre parentesis
//number y despues de => number para declarar que le enviamos un
//numero y que nos devuelve un numero
function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Garcia'): string {
    return `${firstName} ${lastName}`
}

const frank = fullName('Francisco', 'Garcia');

//para que funcione con un solo argumento
//debemos colocar un ? luego del nombre en el segundo parametro
//para indicar que el segundo parametro es opcional
const juanda = fullName('Juan David');

//eventualmente se puede requerir que en lugar de que sea opcional
//el parametro tenga un valor por default
//para este caso despues del tipado le colocamos = y el valor por default

console.log(frank);
console.log(juanda);

let otraSuma:(a: number, b: number) => number = function(x: number, y:number): number {return x + y};
let sumita:(a: number, b: number) => number = (x: number, y:number): number => x + y;

const resultado1 = otraSuma(5, 7);
console.log(resultado1);
const resultado2 = sumita(9, 9);
console.log(resultado2);