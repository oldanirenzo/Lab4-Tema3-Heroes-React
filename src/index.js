import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css"; //Importo los css para poder usar Bootstrap
import MenuHeroes from "./components/MenuHeroes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <MenuHeroes />  {/* Pongo el menu(Navegacion) en el index, para que sea global, y no lo tenga q llamar en cada componente.*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
