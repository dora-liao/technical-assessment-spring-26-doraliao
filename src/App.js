import './App.css';
import { useState } from "react";

import NavBar from "./components/NavBar";
import { ReactComponent as Background } from "./Vector.svg";
import { ReactComponent as Virus } from "./Virus.svg";

import Home from "./pages/Home";
import Pcr from "./pages/Pcr";
import Cloning from "./pages/Cloning";
import Seq from "./pages/Seq";
import Gel from "./pages/Gel";
import Crispr from "./pages/Crispr";

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
  const [page, setPage] = useState("home");
  const userId = getOrCreateUserId();

  const pages = {
    home: <Home userId={userId} />,
    pcr: <Pcr userId={userId} />,
    gel: <Gel userId={userId} />,
    crispr: <Crispr userId={userId} />,
    cloning: <Cloning userId={userId} />,
    seq: <Seq userId={userId} />,
  };

  const virusPositions = [
  { top: "-15%", left: "25%" },
  { top: "-10%", left: "80%" },
  { top: "-5%", left: "-10%" },
  { top: "0%", left: "55%" },
  { top: "5%", left: "0%" },
  { top: "10%", left: "50%" },
  { top: "15%", left: "70%" },
  { top: "20%", left: "95%" },
  { top: "30%", left: "30%" },
  { top: "45%", left: "65%" },
];

  return (
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

      <NavBar setPage={setPage} />
      {pages[page]}
      <Footer />
    </div>
  );
}

export default App;

