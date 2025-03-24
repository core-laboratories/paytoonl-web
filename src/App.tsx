import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Home from "./Pages/Home/Home.tsx";
import Solutions from "./Pages/Solutions/Solutions.tsx";
import PayTo from "./Components/Solutions/PayTo/PayTo.tsx";
import FinTag from "./Components/Solutions/FinTag/FinTag.tsx";

import ICAN from "./Components/Solutions/ICAN/ICAN.tsx";
import ORIC from "./Components/Solutions/ORIC/ORIC.tsx";
import Pass from "./Components/Solutions/Pass/Pass.tsx";
import TxMS from "./Components/Solutions/TxMS/TxMS.tsx";
import DonateTo from "./Components/Solutions/DonateTo/DonateTo.tsx";

import Developers from "./Pages/Developers/Developers.tsx";

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
        <Route path="/solutions/fintag" element={<FinTag />} />

        <Route path="/solutions/ican" element={<ICAN />} />
        <Route path="/solutions/oric" element={<ORIC />} />
        <Route path="/solutions/pass" element={<Pass />} />
        <Route path="/solutions/txms" element={<TxMS />} />
        <Route path="/solutions/donate-to" element={<DonateTo />} />

        <Route path="/developers" element={<Developers />} />
        <Route path="/alliance" element={<Alliance />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
