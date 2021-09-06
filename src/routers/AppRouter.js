import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DireccionNacional } from "../components/screens/DireccionNacional";
import { Historia } from "../components/screens/Historia";
import { Home } from "../components/screens/Home";
import { LideresJuveniles } from "../components/screens/LideresJuveniles";
import { ValoresyPrincipios } from "../components/screens/ValoresyPrincipios";
import { Candidatos } from "../components/screens/Candidatos";
import { Propuestas } from "../components/screens/Propuestas";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lideresjuveniles" component={LideresJuveniles} />
          <Route exact path="/historia" component={Historia} />
          <Route
            exact
            path="/direccionnacional"
            component={DireccionNacional}
          />
          <Route
            exact
            path="/valoresyprincipios"
            component={ValoresyPrincipios}
          />
          <Route exact path="/candidatos" component={Candidatos} />
          <Route exact path="/propuestas" component={Propuestas} />
        </Switch>
      </Router>
    </>
  );
};
