import "./src/assets/css/styles.css";

import Micomponente from './src/Componentes/Micomponente';
function holamundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2> hola {nombre} </h2>
      <h3> tengo {edad} años </h3>
    </div>
  );
  return presentacion;
}
export default function App() {
  var nombre = "alejandro";
  let edad = 25;
  return (
    <div className="App">
      <h1>Hello World in React JS</h1>
      {holamundo(nombre, edad)}
      <section>
        <Micomponente />
        </section>
    </div>
  );
}
