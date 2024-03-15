import { useEffect, useRef, useState } from "react";
import "./menu.css";
const MenuModal = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef}>
      <span id="menu" className="menu-modal" onClick={toggleMenu}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="5" width="16" height="1.5" rx="0.75" fill="#0F0D23" />
          <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="#0F0D23" />
          <rect x="4" y="17" width="16" height="1.5" rx="0.75" fill="#0F0D23" />
        </svg>
      </span>
      <button id="menu-list" className={`menu-list ${isMenuOpen ? "animate-menu" : ""}`}>
        <ul className="menu-class">
          <li className="li-menu">
            <a href="/">Home</a>
          </li>
          <li className="li-menu">
            <a to="/sign-up">Sign Up</a>
          </li>
          <li className="li-menu">
            <a to="/sign-in">Sign In</a>
          </li>
        </ul>
      </button>
    </div>
  );
};

export default MenuModal;
