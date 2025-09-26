import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">VINAYA BANQUET</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#venues">Venues</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/booking">Book Now</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
