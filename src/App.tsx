import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Home from "./Pages/Home/Home.tsx";
import Solutions from "./Pages/Solutions/Solutions.tsx";
import PayTo from "./Components/Solutions/PayTo/PayTo.tsx";
import FinTag from "./Components/Solutions/FinTag/FinTag.tsx";

import ICAN from "./Components/Solutions/ICAN/ICAN.tsx";
import ORIC from "./Components/Solutions/ORIC/ORIC.tsx";
import PayPass from "./Components/Solutions/PayPass/PayPass.tsx";
import TxMS from "./Components/Solutions/TxMS/TxMS.tsx";

import Developers from "./Pages/Developers/Developers.tsx";
import JoinUs from "./Pages/JoinUs/JoinUs.tsx";
import Alliance from "./Pages/Alliance/Alliance.tsx";
import Members from "./Pages/Members/Members.tsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/payto" element={<PayTo />} />
            <Route path="/solutions/fintag" element={<FinTag />} />

            <Route path="/solutions/ican" element={<ICAN />} />
            <Route path="/solutions/oric" element={<ORIC />} />
            <Route path="/solutions/paypass" element={<PayPass />} />
            <Route path="/solutions/txms" element={<TxMS />} />

            <Route path="/developers" element={<Developers />} />
            <Route path="/alliance" element={<Alliance />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
