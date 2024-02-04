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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';


const DefaultContainer = () => (
  <div className="w-[100vw]">
    <NavBar />
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/resources" element={<Resource />} />
      <Route path="/eventdetails" element={<EventDetails />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/member" element={<Member />} />
      <Route path="/hackathon" element={<Hackathon />} />
    </Routes>
    <Foot />
  </div>
)
