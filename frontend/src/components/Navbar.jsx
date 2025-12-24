import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CodeX
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/pdf-tutor">PDF Tutor</Link>
          </li>
          <li>
            <Link to="/yoga">Yoga</Link>
          </li>
          <li>
            <Link to="/squat">Squat</Link>
          </li>
          <li>
            <Link to="/boxing">Boxing</Link>
          </li>
          <li>
            <Link to="/dance">Dance</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 