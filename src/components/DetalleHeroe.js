import React from "react";
import heroesJson from "../assets/data/heroes.json"; //Importo el Json como heroesJson

function DetalleHeroe(props) {
  const idHeroe = props.match.params.id; //Seteo el ID pasado por parametro

  // Creo la variable para cuando encuentre al heroe que concuerda con el ID pasado por parametro
  let heroeEncontrado = [];

  //Recorro cada elemento del array heroesJson, y reviso si el ID de ese elemento es igual al pasado por ID, de ser asi, lo seteo al heroeEncontrado
  heroesJson.forEach((element) => {
    if (element.id === idHeroe) {
      heroeEncontrado = element;
    }
  });

  const imagen = "/images/" + heroeEncontrado.img; //Seteo la direccion de la imagen

  return (
    <div>
      <div className="card border-dark mb-2" styles={{ maxwidth: "25rem" }}>
        <div className="row">
          <div className="col-md-4" style={{ maxwidth: "25rem" }}>
            <img src={imagen} className="card-img" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>
                <b>{heroeEncontrado.nombre}</b>
              </h1>
              <h3>Primera aparicion: {heroeEncontrado.aparicion}</h3>
              <h3>Bio:</h3>
              <h5>{heroeEncontrado.bio}</h5>
              <h3>
                PODERES:
                <ul>
                  <li>{heroeEncontrado.poderes[0]}</li>
                  <li>{heroeEncontrado.poderes[1]}</li>
                  <li>{heroeEncontrado.poderes[2]}</li>
                </ul>
              </h3>
              <h2>
                Heroe de <b>{heroeEncontrado.casa}</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleHeroe;
