import "../App.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Molecular Biology 101</p>
    </footer>
  );
};

export default Footer;