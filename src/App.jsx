import React from "react";

import NavBar from "./components/NavBar";
import Foot from "./components/Foot";

import Home from "./pages/Home";
import Resource from "./pages/Resource";
import Event from "./pages/Event";
import Teams from "./pages/Teams";
import Hackathon from "./pages/Hackathon";
import EventDetails from "./pages/EventDetails";
import Member from "./pages/Member";

import AlgoHome from "./algorithm8.0/pages/AlgoHome";
import Signup from "./algorithm8.0/pages/Signup";

import { BrowserRouter, Route, Switch, } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/algorithm" component={AlgoHome} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={DefaultContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const DefaultContainer = () => (
  <div className="container">
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route path="/events" component={Event} />
    <Route path="/resources" component={Resource} />
    <Route path="/eventdetails" component={EventDetails} />
    <Route path="/teams" component={Teams} />
    <Route path="/member" component={Member} />
    <Route path="/hackathon" component={Hackathon} />
    <Route path="/algorithm" component={AlgoHome} />
    <Foot />
  </div>
)
