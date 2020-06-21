import React from "react";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ListaHeroes from "./components/ListaHeroes.js";
import DetalleHeroe from "./components/DetalleHeroe.js";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <ListaHeroes parametro="" />
        </Route>
        <Route exact path="/heroes/">
          <ListaHeroes parametro="" />
        </Route>
        <Route path="/heroes/:clave" component={ListaHeroes}></Route>
        <Route exact path="/heroes/dc">
          <ListaHeroes parametro="dc" />
        </Route>
        <Route exact path="/heroes/marvel">
          <ListaHeroes parametro="marvel" />
        </Route>
        <Route path="/detalle/:id" component={DetalleHeroe}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
