import React from "react";
let clave = "";
let palabra = "";
clave = (e) => {
  palabra = e.target.value;
};

let submitHandler = (e) => {
  if (palabra === "") {
    window.location.href = "/heroes";
  } else {
    window.location.href = `/heroes/${palabra}`;
  }
};
function MenuHeroes() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/heroes">
        HOME
      </a>
      <a className="navbar-brand" href="/heroes/dc">
        DC
      </a>
      <a className="navbar-brand" href="/heroes/marvel">
        Marvel
      </a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          name="clave"
          onChange={clave}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
          onClick={submitHandler}
        >
          Buscar
        </button>
      </form>
    </nav>
  );
}
export default MenuHeroes;
