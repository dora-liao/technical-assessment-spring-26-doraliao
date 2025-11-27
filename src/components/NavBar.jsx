import "./NavBar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <span className="nav-link" onClick={() => setPage("home")}>Home</span>
        <span className="nav-link" onClick={() => setPage("pcr")}>PCR</span>
        <span className="nav-link" onClick={() => setPage("gel")}>Gel Electrophoresis</span>
        <span className="nav-link" onClick={() => setPage("seq")}>DNA Sequencing</span>
        <span className="nav-link" onClick={() => setPage("cloning")}>Cloning</span>
        <span className="nav-link" onClick={() => setPage("crispr")}>CRISPR</span>
      </div>
    </nav>
  );
}

export default Navbar;