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






// import{from,fromEvent,interval}from "rxjs";
// import{mergeWith,map,mergeAll,mergeMap}from "rxjs/operators";

// MERGEWITH 

// const onClick$ = fromEvent(document, "click").pipe(map(event => event.type));
// const onMouseMove$ = fromEvent(document, "mousemove").pipe(map(event => event.type));

// onClick$.subscribe(console.log);
// onMouseMove$.subscribe(console.log);

// const eventDocument$ = onMouseMove$.pipe(
//     mergeWith(onClick$)
// ).subscribe(value => {
//     console.log("obs:", value)
// });



// MERGEALL // Combina un observable de ordenSuperior (Observable que emite observables) en uno de primer orden que tenga los internos del de ordensuperior

// const onClick$ = fromEvent(document, "click");
// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));
// const primerOrden$ = ordenSuperior$.pipe(mergeAll());

// primerOrden$.subscribe(console.log);




// MERGEMAP // Por cada valor de un observable hace con el una operacion en todos los valores del otro obervable, haciendo así un mapeo


// const letras$=from(["A","B","C"]);

// const resultado$=letras$.pipe(mergeMap((letter)=>interval(1000)
//     .pipe(map((second)=>letter+second))));
    
// resultado$.subscribe(console.log);




//TAKE UNTIL  //Deja de emitir el primer observable una vez se emite un elemento del segundo observable

// import { fromEvent } from "rxjs";
// import { takeUntil } from "rxjs/operators";

// const onMouseMove$ = fromEvent(document, "mousemove");
// const onMouseDown$ = fromEvent(document, "mousedown");

// // A través de takeUntil() definimos que cada vez que un evento es enviado por onMouseDown$
// // el observable sourceCompleted$ será completado. Y por consiguiente no emitirá más valores (línea 15).
// const sourceCompleted$ = onMouseMove$.pipe(takeUntil(onMouseDown$));
// sourceCompleted$.subscribe(console.log);




//STARTWITH  //Emite los valores mandados en el argumento y luego los de la fuente
//ENDWITH //Emite los valores de la fuente y luego los mandados como argumentos

// import { of, from } from "rxjs";
// import { startWith, endWith } from "rxjs/operators";

// // const letters$ = of("A", "B", "C", "D").pipe(startWith("Z"));
// const letters$ = of("A", "B", "C", "D").pipe(endWith("Z"));
// letters$.subscribe(console.log);




//MANEJO DE ERRORES CON CATCHERROR Y RETRY

// import { of, catchError, map, retry } from "rxjs";

// const letters$ = of("A", "B", "C", "D", "E").pipe(
//   map((letter) => {
//     if (letter === "D") {
//       x = 4;
//     }
//     return letter;
//   }),
//   retry(2),
//   catchError((error) => of(error.message))
// );

// letters$.subscribe(console.log);




//MANEJO DE ERRORES PETICIONES HTTP CON AJAX

// /**
//  * AJAX en RxJS
//  * https://rxjs.dev/api/ajax/ajax
//  */
// import { ajax } from "rxjs/ajax";
// import { of, map, catchError } from "rxjs";

// // const ditto$ = ajax("https://pokeapi.co/api/v2/pokemon/itto").pipe(
// //   map((data) => console.log(data.response)),
// //   catchError((error) => {
// //     console.log("Error: ", error.message);
// //     return of(error);
// //   })
// // );

// // ditto$.subscribe(console.log);

// // https://pokeapi.co/api/v2/pokemon/ditto

// const postRequest$ = ajax({
//   url: "https://httpbin.org/delay/5",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: {
//     message: "¿Dónde está Ditto?",
//   },
// }).pipe(
//   map((response) => {
//     console.log(response);
//     return response;
//   }),
//   catchError((error) => {
//     console.log("Error: ", error.message);
//     return of(error);
//   })
// );

// postRequest$.subscribe(console.log);






//PETICIONES HTTP CON FETCH Y COMO ABORTARLAS


// /**
//  * Fetch API en RxJS
//  * Operadores: fromFetch
//  * https://rxjs.dev/api/fetch/fromFetch
//  */
// import { mergeMap, takeUntil, timer } from "rxjs";
// import { fromFetch } from "rxjs/fetch";

// // Petición HTTP con un retraso de 4 segundos.
// const url = "https://httpbin.org/delay/4";
// const ditto$ = fromFetch(url).pipe(
//   mergeMap((response) => {
//     return response.json();
//   }),
//   takeUntil(timer(6000)) // ⬅️ Puedes modificar la cantidad de milisegundos
//                          //   para abortar una petición HTTP enviada.
// );

// ditto$.subscribe(console.log);










import { merge, fromEvent, Subject } from "rxjs";
import { map, filter, takeUntil } from "rxjs/operators";
import WORDS_LIST from "./wordsList.json";

const restartButton = document.getElementById("restart-button");
const letterRows = document.getElementsByClassName("letter-row");
const messageText = document.getElementById("message-text");
const onKeyDown$ = fromEvent(document, "keydown");
let letterIndex;
let letterRowIndex;
let userAnswer;
const getRandomWord = () =>
  WORDS_LIST[Math.floor(Math.random() * WORDS_LIST.length)];
let rightWord;

const userWinOrLoose$ = new Subject();

const insertLetter$ = onKeyDown$.pipe(
  map((event) => event.key.toUpperCase()),
  filter(
    (pressedKey) =>
      pressedKey.length === 1 && pressedKey.match(/[a-z]/i) && letterIndex < 5
  )
);

const insertLetter = {
  next: (letter) => {
    let letterBox =
      Array.from(letterRows)[letterRowIndex].children[letterIndex];
    letterBox.textContent = letter;
    letterBox.classList.add("filled-letter");
    letterIndex++;
    userAnswer.push(letter);
  },
};

const checkWord$ = onKeyDown$.pipe(
  map((event) => event.key),
  filter((key) => key === "Enter" && letterRowIndex < 6)
);

const checkWord = {
  next: () => {
    if (userAnswer.length != 5) {
      messageText.textContent =
        userAnswer.length === 4
          ? "Te falta 1 letra"
          : `Te faltan ${5 - userAnswer.length} letras`;
      return;
    }

    if (!WORDS_LIST.includes(userAnswer.join(""))) {
      messageText.textContent = `¡La palabra ${userAnswer
        .join("")
        .toUpperCase()} no está en la lista!`;
      return;
    }

    // También podemos cambiar el ciclo for/forEach/while en lugar de `userAnswer.map()`
    // Iteramos sobre las letras en índices `[0, 1, 2, 3, 4]`:
    userAnswer.map((_, i) => {
      let letterColor = "";
      let letterBox = letterRows[letterRowIndex].children[i];

      let letterPosition = rightWord.indexOf(userAnswer[i]);

      if (rightWord[i] === userAnswer[i]) {
        letterColor = "letter-green";
      } else {
        if (letterPosition === -1) {
          letterColor = "letter-grey";
        } else {
          letterColor = "letter-yellow";
        }
      }
      letterBox.classList.add(letterColor);
    });

    if (userAnswer.join("") === rightWord) {
      messageText.textContent = `😊 ¡Sí! La palabra ${rightWord.toUpperCase()} es la correcta`;
      userWinOrLoose$.next();
      restartButton.disabled = false;
    } else {
      letterIndex = 0;
      letterRowIndex++;
      userAnswer = [];

      if (letterRowIndex === 6) {
        messageText.textContent = `😔 Perdiste. La palabra correcta era: "${rightWord.toUpperCase()}"`;
        userWinOrLoose$.next();
        restartButton.disabled = false;
      }
    }
  },
};

const removeLetter$ = onKeyDown$.pipe(
  map((event) => event.key),
  filter((key) => key === "Backspace" && letterIndex !== 0)
);

const removeLetter = {
  next: () => {
    let letterBox = letterRows[letterRowIndex].children[userAnswer.length - 1];
    letterBox.textContent = "";
    letterBox.classList = "letter";
    letterIndex--;
    userAnswer.pop();
  },
};

const onRestartClick$ = fromEvent(restartButton, "click");
const onWindowLoad$ = fromEvent(window, "load");
const restartGame$ = merge(onWindowLoad$, onRestartClick$);

restartGame$.subscribe(() => {
  Array.from(letterRows).map((row) =>
    Array.from(row.children).map((letterBox) => {
      letterBox.textContent = "";
      letterBox.classList = "letter";
    })
  );

  letterRowIndex = 0;
  letterIndex = 0;
  userAnswer = [];
  messageText.textContent = "";
  rightWord = getRandomWord();

  restartButton.disabled = true;

  console.log(`Right word: ${rightWord}`);

  let insertLetterSubscription = insertLetter$
    .pipe(takeUntil(userWinOrLoose$))
    .subscribe(insertLetter);
  let checkWordSubscription = checkWord$
    .pipe(takeUntil(userWinOrLoose$))
    .subscribe(checkWord);
  let removeLetterSubscription = removeLetter$
    .pipe(takeUntil(userWinOrLoose$))
    .subscribe(removeLetter);
});



