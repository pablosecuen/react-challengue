import "./navbar.css";
import MenuModal from "../menu";
import AuthComponent from "../auth";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {" "}
        <div className="menuIcon">
          <MenuModal />
        </div>
        <div className="userIcon">
          <AuthComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
