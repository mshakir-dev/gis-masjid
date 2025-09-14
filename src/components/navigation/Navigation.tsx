import { useState } from "react";
import { FaBars, FaBullhorn, FaDonate, FaEnvelope, FaHome, FaMosque, FaPray, FaTimesCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useAutoCloseSidebar from "../../hooks/useAutoCloseSidebar";
import { usePreventScroll } from "../../hooks/usePreventScroll";
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);
  useAutoCloseSidebar(isOpen, () => setIsOpen(false));
  usePreventScroll(isOpen);

  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/prayer", label: "Prayer Time", icon: <FaPray /> },
    { path: "/hadith", label: "Hadith", icon: <FaBullhorn /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="header-navbar">
      <div className="container">

        <div className="navbar-logo">
          <Link to="/" title="Gadsden Islamic Society">
            <div className="navbar-logo-text">
              <FaMosque className="logo-icon" />
              <div>
                <h4 className="title">Gadsden Islamic Society</h4>
                <p className="subtitle">In Service of ALLAH and Humanity</p>
              </div>
            </div>
          </Link>
        </div>

        <ul className="navbar-menu">
          {menuItems.map(({ path, label, icon }) => (
            <li key={path}>
              <Link to={path} className={currentPath === path ? "active" : ""}>
                <span className="menu-item-content">
                  {label}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/donate" className={`donate-btn ${currentPath === "/donate" ? "active" : ""}`}>
              <span className="menu-link-icon"><FaDonate /></span>Donation
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className={`navbar-menu-sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-close-icon" onClick={toggleMenu}>
            <FaTimesCircle />
          </div>
          <ul>
            {menuItems.map(({ path, label, icon }) => (
              <li key={path}>
                <Link to={path} className={currentPath === path ? "active" : ""} onClick={() => setIsOpen(false)}>
                  <span className="menu-link-icon">{icon}</span>{label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar-menu-sidebar-bottom">
            <div className="contact-info">
              <p><FaHome /> 108 South 9th St, Gadsden, AL 35903</p>
              <p><FaEnvelope /> info@gadsdenislamic.org</p>
            </div>
            <Link to="/donate" className={`donate-btn ${currentPath === "/donate" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
              <FaDonate /> Donate
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
