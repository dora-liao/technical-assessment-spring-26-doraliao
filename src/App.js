import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { ReactComponent as Background } from "./Vector.svg";
import { ReactComponent as Virus } from "./Virus.svg";

import Home from "./pages/Home";
import Pcr from "./pages/Pcr";
import Cloning from "./pages/Cloning";
import Seq from "./pages/Seq";
import Gel from "./pages/Gel";
import Crispr from "./pages/Crispr";
import MatchGame from "./pages/MatchGame";

import Footer from "./components/Footer";

function getOrCreateUserId() {
  let uid = localStorage.getItem("user_id");
  if (!uid) {
    uid = crypto.randomUUID();
    localStorage.setItem("user_id", uid);
  }
  return uid;
}

function App() {
  const userId = getOrCreateUserId();

  const virusPositions = [
    { top: "-15%", left: "25%" },
    { top: "-10%", left: "80%" },
    { top: "-5%", left: "-10%" },
    { top: "0%", left: "55%" },
    { top: "5%", left: "0%" },
    { top: "10%", left: "20%" },
    { top: "15%", left: "70%" },
    { top: "20%", left: "95%" },
    { top: "30%", left: "30%" },
    { top: "45%", left: "65%" },
  ];

  return (
    <Router>
      <div className="app-background">
        
        <Background className="bg-svg left" />
        <Background className="bg-svg center" />
        <Background className="bg-svg right" />

        {virusPositions.map((pos, idx) => (
          <Virus
            key={idx}
            className="virus-svg"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}

        <NavBar />

        <Routes>
          <Route path="/" element={<Home userId={userId} />} />
          <Route path="/Pcr" element={<Pcr userId={userId} />} />
          <Route path="/Seq" element={<Seq userId={userId} />} />
          <Route path="/Crispr" element={<Crispr userId={userId} />} />
          <Route path="/Cloning" element={<Cloning userId={userId} />} />
          <Route path="/Gel" element={<Gel userId={userId} />} />
          <Route path="/MatchGame" element={<MatchGame />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
