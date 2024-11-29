import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ResearchMentors from "./pages/ResearchMentors";
import Events from "./pages/Events";
import LoginForm from "./pages/LoginForm";
import EventLandingPage from "./pages/EventLandingPage";

const App = () => {
  return (
    <div className="bg-white">
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event" element={<EventLandingPage />} />
        <Route path="/mentors" element={<ResearchMentors />} />
        <Route path="/gallery" element={<ResearchMentors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes></div>
  );
};

export default App;
