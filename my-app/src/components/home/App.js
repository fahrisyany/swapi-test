import React, { useEffect, useState } from 'react';
import "./App.scss";
import Navigation from "../navigation/Navigation"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FilmsPage from '../films/FilmsPage'
import PeoplesPage from '../peoples/PeoplesPage'
import DetailPage from '../detail/DetailPage'
import heroImage from "../../images/daniel-cheung-i5Lmb7qPR7s-unsplash.jpg"

function App() {

  return (
    <div className="App">
      <main>
          <div className="hero">
          <img src={heroImage} alt="Logo" />;
          </div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <FilmsPage />
            </Route>
            <Route path="/peoples">
              <PeoplesPage />
            </Route>
            <Route path={`/people/:id`} component={DetailPage}>
            </Route>
          </Switch>
        </Router>

      </main>
    </div>
  );
}

export default App;
