import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "./auth.css";
import { Link } from "react-router-dom";
const AuthComponent = () => {
  return (
    <header>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link to="/sign-in">Sign In</Link>
      </SignedOut>
    </header>
  );
};

export default AuthComponent;
