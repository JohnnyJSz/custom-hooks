/*
    .- Ejercicio 1

    Crea un hook que recibe una función por argumento y que la ejecute cada vez que el usuario haga scroll por la página.

*/
import { useEffect } from 'react';

// pasamos por parámetro nuestra función a ejecutar (myFunction) cuando se active el custom hook.
function useScroll(myFunction) {
    // el segundo argumento de useEffect es la dependencia que nos va a indicar que el efecto se volverá a ejecutar solo si los valores en el array cambian.
    // además es buena práctica especificar en las dependencias todos los elementos de fuera del efecto que usemos, en este caso myFunction.
    useEffect(() => {
        // creamos un listener para cuando se haga scroll ejecutar la función deseada, en este caso la pasada por parámetro.
        window.addEventListener("scroll", myFunction);
        // cleanup: con esto eliminamos el eventListener de los renders anteriores para después añadir el correspondiente al render actual.
        return () => {
            window.removeEventListener("scroll", myFunction);
        };
    }, [myFunction]);
}

export default useScroll;