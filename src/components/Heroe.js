import React from "react";

function Heroe({ nombre, poderes, img, id }) {
  const imagen = "/images/" + img; //Creo el src con la imagen ya incluida, para mayor comodidad
  const detalle = "/detalle/" + id; //Creo la url con el id ya incluido para mandar a la pagina detalle
  return (
    <div>
      _______________________________________________________________________________________________________________________________________________________________
      <table border="1" style={{ width: "580px" }}>
        <thead border="1">
          <tr>
            <th>
              <div style={{ color: "green" }}>{nombre} </div>
            </th>
            <th>
              <div style={{ color: "red" }}>Poderes </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center" width="290px">
              <img src={imagen} alt={nombre} />
            </td>
            <td align="left">
              <ul>
                <li> {poderes[0]} </li>
                <li> {poderes[1]} </li>
                <li> {poderes[2]} </li>
              </ul>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr align="center">
            <th>
              <a href={detalle}>
                <button> VER MAS </button>
              </a>
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Heroe;
