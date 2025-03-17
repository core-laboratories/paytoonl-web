import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Home from "./Pages/Home/Home.tsx";
import Solutions from "./Pages/Solutions/Solutions.tsx";
import PayTo from "./Components/Solutions/PayTo/PayTo.tsx";
import React from "react";
import Alliance from "./Pages/Alliance/Alliance.tsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/payto" element={<PayTo />} />

        <Route path="/alliance" element={<Alliance />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
