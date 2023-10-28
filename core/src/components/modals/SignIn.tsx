import { useAuth, useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const clerk = useClerk();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     navigate("/chat");
  //   }
  // }, [isLoaded, isSignedIn, navigate]);

  const handleClicked = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    clerk.openSignIn();
  };

  return (
    <>
      <button
        className="min-w-min cursor-pointer border-none m-2 mr-8 hover:text-primary-orange text-lg font-bold transition ease-linear"
        onClick={(e) => handleClicked(e)}
      >
        Log In
      </button>
    </>
  );
}

export function InTextSignIn() {
  const clerk = useClerk();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     navigate("/chat");
  //   }
  // }, [isLoaded, isSignedIn, navigate]);

  const handleClicked = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    clerk.openSignIn();
  };

  return (
    <a href="#" onClick={handleClicked}>
      <u>sign in</u>
    </a>
  );
}

export function SignUp() {
  const clerk = useClerk();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     navigate("/chat");
  //   }
  // }, [isLoaded, isSignedIn, navigate]);

  const handleClicked = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    clerk.openSignUp();
  };

  return (
    <>
      <button
        className="btn btn-primary bg-primary-orange min-w-min cursor-pointer text-white border-none hover:bg-white hover:text-primary-orange text-base normal-case"
        onClick={(e) => handleClicked(e)}
      >
        Sign Up
      </button>
    </>
  );
}
