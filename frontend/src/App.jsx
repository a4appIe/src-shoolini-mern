import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Events from "./pages/Events";
import LoginForm from "./pages/LoginForm";
import EventLandingPage from "./pages/EventLandingPage";
import EventForm from "./pages/EventFrom";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/AdminDashboard";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Mentors from "./pages/Mentors";
import Founders from "./pages/Founders";

const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/event/:slug" element={<EventLandingPage />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route
            path="/mentors"
            element={<Mentors section={"List of Mentors"} />}
          />
          <Route
            path="/board-of-regents"
            element={<Mentors section={"Board of Regents"} />}
          />
          <Route path="/founders" element={<Founders />} />
          <Route path="/rd-board" element={<Mentors section={"R&D Board"} />} />
          <Route
            path="/financial-board"
            element={<Mentors section={"Financial Board"} />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/admin" element={<LoginForm />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
