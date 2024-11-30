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
import EventForm from "./pages/EventFrom";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/AdminDashboard";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/event" element={<EventLandingPage />} />
          <Route path="/mentors" element={<ResearchMentors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<LoginForm />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
