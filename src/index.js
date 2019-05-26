import React from 'react'
import ReactDOM from 'react-dom'
import BadgeNew from './pages/BadgeNew'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
const container = document.getElementById('app')

ReactDOM.render(<BadgeNew />, container)

// @Hecho con Vanilla js

// const element = document.createElement('h1');
// element.innerText = "Hello World!";

// const container = document.getElementById('app');
// container.appendChild(element);

// @Utilizando React

// import React from "react";
// import ReactDOM from "react-dom";
// const element = <h1>Hello React World!</h1>
// const name = 'Ramiro';
// const sum = () => 3 + 3;

// const jsx =
// <div>
//     <h1>
//         Hola soy {name}  Puede Recibir Variables o expresiones
//     </h1>
// </div>

// const jsx =
// <div>
//     <h1>
//         Hola soy {2 + 2} ==> expresiones - Si es Falsy Value no se muestra ;-)
//     </h1>
// </div>
// const element = React.createElement('h1 o argumento', {props o atributos}, 'children')  React es JS
// const jsx = (
//   <div>
//     <h1>Hola soy {sum()}</h1>
//   </div>
// );

// const container = document.getElementById("app");

// ReactDOM.render(element, container);
