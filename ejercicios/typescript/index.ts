console.log('hello, typescript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2, 3);

console.log(sum);

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

let fullName: string = `Bob Bobbington`;
let ages: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ ages + 1 } years old next month.`;

console.log(sentence);

let sentences: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

    console.log(sentences);



// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

console.log(x[0].substring(1)); // OK
