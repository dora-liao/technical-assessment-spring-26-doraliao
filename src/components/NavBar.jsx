import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Pcr">PCR</Link>
        <Link className="nav-link" to="/Gel">Gel Electrophoresis</Link>
        <Link className="nav-link" to="/Seq">DNA Sequencing</Link>
        <Link className="nav-link" to="/Cloning">Cloning</Link>
        <Link className="nav-link" to="/Crispr">CRISPR</Link>
        <Link className="nav-link" to="/MatchGame">Matching Game</Link>
      </div>
    </nav>
  );
}

export default Navbar;
