import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Funcion1} from './Funcion1';
import {Boton} from './Button';
import {TaskCard} from './Task';
import {Saludar} from './Saludar';
import {Post} from './Posts';

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange=(e)=>{
  console.log(e.target.value)
}

const users = [
  {
    id: 1,
    name: 'Cristian Icka',
    image: "https://media.licdn.com/dms/image/D4D35AQGWWnEVlSQOOA/profile-framedphoto-shrink_200_200/0/1662577736322?e=1677085200&v=beta&t=9_-Vt1FzJwqW88EC68M22Zb22kw1Sw4ULRijEbiCHOI",
  },
  {
    id: 2,
    name: 'Yo yo',
    image: "https://robohash.org/usuario 2",
  },
];

root.render(
  <>
    {/* <Funcion1 name="Cristian Icka" telefono="+56975365810" direccion={{calle: "Martín de Solís", numero: "13349", ciudad: "San Bernardo"}} greet={function() {alert("Hola")}}> */}
    {/* <h1><Boton text= "Click uno"/></h1>
    <h1><Boton text= "Click dos"/></h1>
    <h1><Boton text= "Click tres"/></h1> */}
{/*     <TaskCard ready={false}/>
    <Saludar/>
    <Boton text='Saludo'/> */}
{/*     <li>
      
      <input onChange={handleChange}
       />
    </li> */}
{/*     <form onSubmit= {(e) => {
        e.preventDefault()
        alert('enviado')
        }
      }>
      <h1>Registro</h1>
      <button>Aceptar</button>
    </form> */}

    {/* <Post/> */}
    
    {
      users.map((users, i) => {
        return (
        <div key={i}>
          <h1 >{users.name}</h1>
          <img src={users.image}></img>
        </div>
        );
      })
    }
    
  </>  


);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

