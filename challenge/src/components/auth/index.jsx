import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "./auth.css";
const AuthComponent = () => {
  return (
    <header>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <a href="/sign-in">Sign In</a>
      </SignedOut>
    </header>
  );
};

export default AuthComponent;
