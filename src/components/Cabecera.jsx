import "./MisEstilos.css";
import "../js/girarImagen.jsx";
import { useEffect } from "react";
import { rotateOnMouseMove } from "../js/girarImagen.jsx";

const Cabecera = () => {
  function cambiaTamanio(){
    logo = document.getElementById("logo");
    logo.width = 200;
    logo.height = 200;
  }
  useEffect(() => {
    const image = document.querySelector("#img");
    rotateOnMouseMove(image);
  }, []);
  return (
    <header className="Cabecera" >
      <h1 className="Cabecera_title">Portafolio</h1>;
      <div className="row">  
        <div id="img" className="Cabecera_img">
          <img  className="img" src="../src/assets/img/yo1.jpeg"/>
        </div>
        <div className="Cabecera_div2">
          <h1 className="Cabecera_h1">Bienvenidos!!<br/> Mi nombre es Cristian Icka, Ingeniero en Informática de DUOC UC, tengo 48 años, soy oriundo de Quilpué, vivo en San Bernardo, región Metropolitana, Chile. <br/> En este portafolio mostraré mis avances luego de terminar la carrera y aunque me oriento a la gestión de proyectos y la ciencia de datos.</h1>
        </div>
      </div>
    </header>
  );
};

export default Cabecera;
