import React from "react";
import Heroe from "./Heroe.js";
import heroes from "../assets/data/heroes.json"; // importo el json y lo guardo en "heroes"

function ListaHeroes(props) {
  let parametro = ""; //Inicializo a parametro vacio
  props.match ? (parametro = props.match.params.clave) : (parametro = ""); //Si existe props.match, lo seteo a parametro, sino, seteo a parametro como vacio
  return (
    <div>
      {heroes.map((
        heroe //Hago un mapeo de heroe asi lo recorro como un for
      ) =>
        heroe.casa.toLowerCase().includes(parametro.toLowerCase()) || //Reviso si "casa" incluye al parametro que pase.
        heroe.bio.toLowerCase().includes(parametro.toLowerCase()) ||
        heroe.nombre.toLowerCase().includes(parametro.toLowerCase()) ||
        heroe.poderes[0].toLowerCase().includes(parametro.toLowerCase()) ||
        heroe.poderes[1].toLowerCase().includes(parametro.toLowerCase()) ||
        heroe.poderes[2].toLowerCase().includes(parametro.toLowerCase()) ? (
          <Heroe //Llamo al Heroe con los datos que correspondan
            key={heroe.id}
            id={heroe.id}
            nombre={heroe.nombre}
            poderes={heroe.poderes}
            img={heroe.img}
          />
        ) : null
      )}
    </div>
  );
}
export default ListaHeroes;
