import { useUser } from "@clerk/clerk-react";
import "./userdisplay.css";
const UserDisplay = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="displaycontainer">
      {isSignedIn ? (
        <>
          <p> Hi {user.fullName}</p>
          <p>Welcome Back!</p>{" "}
        </>
      ) : (
        <p>Hi there, please login!</p>
      )}
    </div>
  );
};

export default UserDisplay;
