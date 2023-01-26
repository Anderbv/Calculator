import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from "./imagenes/freeCodeCampLogo.png"
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from "mathjs"

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val)
  }

  const resetearInput = val => {
    setInput("")
  }

  const calcularResultado = val => {
    if(input) {
      setInput(evaluate(input))
    }else {
      alert("Porfavor ingrese valores para realizar los calculos. ")
    }
  }

  const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d"
        //Cuando estamos en esta parte del codigo copiando
        //la propiedad c en obj2, retrocedamos al crear
        //esta objeto como valor de una propiedad dentro
        //de obj1 lo que en realidad estoy haciendo es
        //creadon un referencia en un espacio en memoria dentro
        //del heap donde se almacena mi objeto nuevo
        //entonces el valor de la propiedad c es un apuntador
        //a ese espacio en memoria, donde se encuentra mi
        //objeto
        //entonces obj2 copia esta referencia, este apuntador
        //por ende ambos objetos estan hacien referencia
        //al mismo espacio en memoria
        //eso quiere decir que si con obj2 cambio el valor
        //de mi objeto estoy modficiendo la misma propiedad
        //en obj1
    }
}

console.log(obj1)

const obj2 = Object.assign({}, obj1)
const obJ3 = Object.create(obj1) //Objt3 tomara
//como referencia las propiedades y valores
//del objeto que hereda, esto se hara dentro del proto pero
//cuando editamos una propiedad dentro de este 
//nuevo objeto se crea un nueva
//propiedad dentro del objeto, por ejemplo
//la propiedad b le asigno el valor de "BBBB"
//lo que estoy haciendo es crear una nueva
//propiedad dentro de este objeto con el valor "BBBB"
//Entonces tomare como propiedad y valor este
//nueva propiedad(o version actual) y ignorare la propiedad
//b que se encuentra dentro del proto, es decir que
//ya no sera accedida, si no que se tomara la ultima
//asignacion(la version actual)..
//Pero si el objeto del cual heradamos las propiedades
//y valores cambia de valor, en algunas de sus propiedades
//entonces como heradamos sus propiedades y valores
//dentro del proto se veran reflejados estos cambios
//que hizo el objeto del cual estamos extiendiendo
//ya que este objeto del cual estamos extendiendo
//es una referencia del nuevo objeto que acabamos
//de crear



console.log("obt1", obj1)
console.log("obj2", obj2)

obj2.c.d = "DDDDD"







  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={resetearInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
