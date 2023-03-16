import { Observable } from "rxjs";

const observableAlfa$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  a = b;
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4);
});

const observador = {
    next: (value) => {
      console.log(value); // Podemos transmitir los valores emitidos.
    },
    complete: () => {
      console.log("Observable completado"); // Podemos informar que el Observable dejará de emitir valores.
    },
    error: (error) => {
      console.log("Error recibido: "); // Podemos manejar errores provinientes del Observable.
      console.error(error);
    },
  };

  observableAlfa$.subscribe(observador);