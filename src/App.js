import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Formations from "./pages/Formations";
import Produits from "./pages/Produits";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FormationDetails from "./pages/FormationDetails";
import NotFound404 from "./components/NotFound404";

function App() {
  const path = window.location.pathname;

  return (
    <>
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/formations" element={<Formations />} />
          <Route
            path="/formations/:category/:formation"
            element={<FormationDetails />}
          />
          <Route path="/404" element={<NotFound404 />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {path !== "/404" && <Footer />}
      </Router>
    </>
  );
}

export default App;
