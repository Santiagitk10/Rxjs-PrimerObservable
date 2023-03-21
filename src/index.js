//COMANDOS PARA EMPEZAR UN PROYECTO CON NPM

// *Se crea una carpeta nueva
// *Se inicializa el repo de npm = npm init --yes
// *Instalar los paquetes que se necesiten =
//     webpack para tener un projecto visualizado en el navegador
//  npm i rxjs webpack webpack-dev-server
//  npm i -D webpack-cli
// *Crear archivo de configuración de webpack en la raíz del proyecto
// *Modificar el package.json para que npm start ejecute el comando para 
// abrir la aplicación "start": "webpack serve --open"
// *Referenciar el scrip en el html com bundle.js según el archivo de 
// configuración de webpack
// *Agregar el archivo gitignore antes de subir al repo de Github



//PRIMER OBSERVABLE
// import { Observable } from "rxjs";

// const observableAlfa$ = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   a = b;
//   subscriber.next(3);
//   subscriber.complete();
//   subscriber.next(4);
// });

// const observador = {
//     next: (value) => {
//       console.log(value); // Podemos transmitir los valores emitidos.
//     },
//     complete: () => {
//       console.log("Observable completado"); // Podemos informar que el Observable dejará de emitir valores.
//     },
//     error: (error) => {
//       console.log("Error recibido: "); // Podemos manejar errores provinientes del Observable.
//       console.error(error);
//     },
//   };

//   observableAlfa$.subscribe(observador);



//FROM EVENT

// import { fromEvent } from "rxjs";

// const onKeyDown$ = fromEvent(document, "keydown");

// const observadorTeclado = {
//   next: (event) => {
//     console.log(event.key);
//   },
// };

// onKeyDown$.subscribe(observadorTeclado);


//SUBJECT

// import { Observable, Subject } from "rxjs";

// const numbers$ = new Observable((subscriber) => {
//   // Podemos enviar una función (como Math.random) que generará el mismo dato en observador1 y observador2.
//   subscriber.next(Math.round(Math.random() * 100));
// });

// const numbersRandom$ = new Subject();

// const observador1 = {
//   next: (number) => {
//     console.log(number);
//   },
// };

// const observador2 = {
//   next: (number) => {
//     console.log(number);
//   },
// };

// numbersRandom$.subscribe(observador1);
// numbersRandom$.subscribe(observador2);
// numbers$.subscribe(numbersRandom$);


//FROM Y OF

// import { from, of, asyncScheduler } from "rxjs";

// // of genera un observable a partir de sus argumentos.
// const vegetables$ = of("from", "eggplant", "onion", "corn");

// // from genera un observable a partir de un arreglo de elementos.
// // Scheduler *como argumento* en from() será obsoleto después de la RxJS v8.
// const fruits$ = from(["apple", "tangerine", "pear", "banana"], asyncScheduler);

// vegetables$.subscribe(console.log);
// fruits$.subscribe(console.log);


//INTERVAL Y TIMER


// import { interval, timer } from "rxjs";

// const sequenceNumbers$ = interval(200); // Emite valores numéricos cada 200 milisegundos.
// const delayedTimer$ = timer(5000); // Retrasa un valor numérico por 5000 milisegundos.

// sequenceNumbers$.subscribe(console.log);
// delayedTimer$.subscribe(console.log);


//MAP, REDUCE, FILTER


// import { from } from "rxjs";
// import { map, reduce, filter } from "rxjs/operators";

// const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
//   // map((value) => value * 2),
//   // filter((value) => value % 2 !== 0),
//   reduce((accumulated, value) => accumulated + value, 10)
// );
// numbers$.subscribe(console.log);



//OPERADORES DE DISTINCIÓN
//DISTINCT , DISTINCTUNTILCHANGED, DISTINCTUNTILKEYCHANGED



// import { of } from "rxjs";
// import {
//   distinct,
//   distinctUntilChanged,
//   distinctUntilKeyChanged,
// } from "rxjs/operators";

// // distinct
// const repeatedNumbers$ = of(1, 2, 1, 3, 4, 4, 2, 1).pipe(distinct());
// repeatedNumbers$.subscribe(console.log);

// // distinctUntilChanged
// const repeatedNumbersChanged$ = of(1, 2, 1, 3, 4, 4, 2).pipe(
//   distinctUntilChanged()
// );
// repeatedNumbersChanged$.subscribe(console.log);

// // distinctUntilKeyChanged
// const repeatedNumbersKeyChanged$ = of(
//   { k: 1 },
//   { k: 2 },
//   { k: 1 },
//   { k: 3 },
//   { k: 4 },
//   { k: 4 },
//   { k: 2 },
//   { k: 1 }
// ).pipe(distinctUntilKeyChanged("k"));
// repeatedNumbersKeyChanged$.subscribe(console.log);




//OPERADORES DE TIEMPO 
// DEBOUNCETIME, THROTTLETIME, AUDITTIME, SAMPLETIME


// import { fromEvent } from "rxjs";
// import {
//   debounceTime,   //Cuando llega un valor inicia un contador, cuando se cumple el contador emite, pero si llega otro valor antes que termine el contador, este se reinicia y el efecto es que no se emite el primero
//   throttleTime,   //Se emite un valor y se ignoran los demás hasta que termine el temporizador
//   auditTime,      //Se ejecuta un temporizador y se transmite el último valor que haya llegado durante la duración del temporizador
//   sampleTime,     //Es como audittime pero toma una función que ejecuta con el último valor
// } from "rxjs/operators";

// const onClick$ = fromEvent(document, "click").pipe(
//   // debounceTime(4000),
//   // throttleTime(4000),
//   // auditTime(4000),
//   sampleTime(4000)
// );

// onClick$.subscribe(console.log);