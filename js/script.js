const inicio = "Un ";

let sujeto = ["enano ", "extraterrestre ", "perro ", "gato ", "cocodrilo ", "meteorito ", "policía ", "robot ", "payaso "];

let adjetivo = ["solitario ", "amigable ", "asesino ", "llorón ", "amargado ", "amarillo ", "triste ", "lindo ", "envidioso ", "celoso "];

let accion = ["quemó ", "dañó ", "rompió ", "voló ", "explotó "];

let objeto = ["mi dedo ", "mi tarea ", "mi carro ", "mi casa ", "mi bicicleta "];

let sitio = ["en el baño", "en el bar", "en la calle", "en la fiesta", "en la universidad"];

let num1 = Math.floor(Math.random()*sujeto.length);

let num2 = Math.floor(Math.random()*adjetivo.length);

let num3 = Math.floor(Math.random()*accion.length);

let num4 = Math.floor(Math.random()*objeto.length);

let num5 = Math.floor(Math.random()*sitio.length);

let excusa = (inicio + sujeto[num1] + adjetivo[num2] + accion[num3] + objeto[num4] + sitio[num5]);

console.log(excusa);

document.getElementById("excusa_random").innerHTML = excusa;




// console.log(sujeto.length-1)
// console.log(adjetivo.length-1)
// console.log(accion.length-1)
// console.log(objeto.length-1)
// console.log(sitio.length-1)

// console.log("________________")

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)






// Un cono de helado solutario quemo mi dedo en el baño