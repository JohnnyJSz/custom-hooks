import { useState, useEffect } from "react";
import "./App.css";
import useScroll from "./customHooks/UseScroll";
import useKey from "./customHooks/UseKey";

function App() {
  //asignamos el scroll actual al estado.
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);

  useEffect(() => {
    // esta función establece el estado y le asigna la posición del scroll actual.
    function onScroll() {
      setCurrentScroll(window.scrollY);
    }

    // creamos un listener para cuando se haga scroll se ejecute la fn onScroll **
    window.addEventListener("scroll", onScroll);

    //cleanup que se realiza antes de ejecutar de nuevo un efecto.
    //React ejecuta la función que hayamos devuelto en el efecto anterior
    return () => {
      //con esto eliminamos el eventListener del render anterior, para posteriormente añadir uno nuevo correspondiente al render actual. **
      window.removeEventListener("scroll", onScroll);
    };
  });

  // custom hook - useScroll
  //
  useScroll(() => {
    // cada vez que hagamos scroll ejecutaremos nuestra función que logea el scroll en el que nos encontremos.
    console.log(`El scroll actual es: ~${currentScroll}`);
  });

  // custom hook - useKey
  // dos parámetros:
  // - función a realizar por el hook.
  // - tecla que permite la ejecución de nuestra función.
  let tecla = "b";
  useKey(() => {
    // cada vez que presionamos una tecla logeamos en consola la tecla pulsada
    console.log(`se ha pulsado la tecla ${tecla}`);
  }, tecla);

  return (
    <div className='App'>
      <div className='current-scroll'>Scroll actual: {currentScroll}</div>
      <h1>Custom Hooks - useScroll & useKey</h1>
      <ul>
        <li>
          <h3 style={{ color: "blue" }}>
            Haz scroll arriba y abajo para ejecutar el custom hook{" "}
            <i style={{ color: "black" }}>useScroll</i>
          </h3>
        </li>
        <li>
          <h3 style={{ color: "red" }}>
            Presiona la tecla <span style={{ color: "black" }}>{tecla}</span>{" "}
            para ejectuar el custom hook{" "}
            <i style={{ color: "black" }}>useKey</i>
          </h3>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta,
        nibh in tristique vestibulum, lacus sem rhoncus elit, eget elementum
        dolor nibh tincidunt purus. Donec imperdiet massa ultrices nibh
        lobortis, ut gravida ex vestibulum. Praesent viverra nec magna id
        pretium. Nam semper est eget varius cursus. Aenean efficitur turpis
        arcu, nec aliquet lacus tincidunt eget. Donec sit amet urna tortor.
        Praesent lacus nisi, fermentum eget lobortis et, pretium a elit.
        Suspendisse ornare congue nisl tincidunt tincidunt. Ut ac malesuada
        magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae aliquam turpis.
        Mauris id venenatis nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam porta, nibh in tristique vestibulum, lacus sem
        rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec imperdiet
        massa ultrices nibh lobortis, ut gravida ex vestibulum. Praesent viverra
        nec magna id pretium. Nam semper est eget varius cursus. Aenean
        efficitur turpis arcu, nec aliquet lacus tincidunt eget. Donec sit amet
        urna tortor. Praesent lacus nisi, fermentum eget lobortis et, pretium a
        elit. Suspendisse ornare congue nisl tincidunt tincidunt. Ut ac
        malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam porta, nibh in tristique vestibulum,
        lacus sem rhoncus elit, eget elementum dolor nibh tincidunt purus. Donec
        imperdiet massa ultrices nibh lobortis, ut gravida ex vestibulum.
        Praesent viverra nec magna id pretium. Nam semper est eget varius
        cursus. Aenean efficitur turpis arcu, nec aliquet lacus tincidunt eget.
        Donec sit amet urna tortor. Praesent lacus nisi, fermentum eget lobortis
        et, pretium a elit. Suspendisse ornare congue nisl tincidunt tincidunt.
        Ut ac malesuada magna, ut sollicitudin diam. Sed eu accumsan nisi, vitae
        aliquam turpis. Mauris id venenatis nunc.{" "}
      </p>
    </div>
  );
}

export default App;
