import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="link-nav">
      <div className="link-div">
        <Link to="/" className="link-style home">Home</Link>
        <Link to="/about" className="link-style">About</Link>
        <Link to="/education" className="link-style">Projects</Link>
      </div>
    </div>
  );
}

export default Navigation;
