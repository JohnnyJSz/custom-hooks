/*
    .- Ejercicio 2

    Crea un hook que recibe una función por argumento y el código de una tecla. El hook ejecutará la función pasada por argumentos cada vez que se pulse la tecla.

*/
import { useEffect } from "react";

// nuestro custom hook recibe dos argumentos:
// - la función a ejecutar
// - la tecla que al ser pulsada hará posible la ejecución de nuestra función
function useKey(myFunction, myKey) {
  // el array de dependencias serán la función y la tecla
  // es recomendable incluir los elementos que se usen (dentro del efecto) de fuera del efecto en el array de dependencias
  useEffect(() => {
      
    // **
    function llamadaDeVuelta(event) {
      if (event.key === myKey) {
        myFunction();
      }
    }

    document.addEventListener("keypress", llamadaDeVuelta);

    // cleanup: al hacer un nuevo render eliminamos el eventListener del render anterior para posteriormente crear el del render actual y no acumular eventListeners.
    return () => {
      document.removeEventListener("keypress", llamadaDeVuelta);
    };
  }, [myFunction, myKey]);
}

export default useKey;
