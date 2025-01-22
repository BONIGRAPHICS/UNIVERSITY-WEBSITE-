import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./COMPONENTS/Navbar";
import Popular from "./COMPONENTS/Popular";
import Footer from "./COMPONENTS/Footer";
import Home from "./Home";
import About from "./COMPONENTS/About";
import Banner from "./COMPONENTS/Banner";

function App() {
  return (
    <Router>
      <div>
        <div className="topNavOnly">
          <Navbar />
        </div>
        <div className="middleOne">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Popular />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Banner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
