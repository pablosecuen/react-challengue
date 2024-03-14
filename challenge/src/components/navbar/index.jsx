import "./navbar.css";
import userPic from "../../../public/icons/userpic.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {" "}
        <div className="menuIcon">
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
        </div>
        <div className="userIcon">
          <img src={userPic} alt="user picture" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
