import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./pages/Home";
import Resource from "./pages/Resource";
import Event from "./pages/Event";
import Teams from "./pages/Teams";
import Hackathon from "./pages/Hackathon";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import EventDetails from "./pages/EventDetails";
import Member from "./pages/Member";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Event} />
          <Route path="/resources" component={Resource} />
          <Route path="/eventdetails" component={EventDetails} />
          <Route path="/teams" component={Teams} />
          <Route path="/member" component={Member} />
          <Route path="/hackathon" component={Hackathon} />
          {/* <Route path="/team-tshirt" component={TeamTshirt} /> */}
        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}
