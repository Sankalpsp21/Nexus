import { useClerk } from '@clerk/clerk-react';

export function SignIn() {
  const clerk = useClerk();

  const handleClicked = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     navigate("/chat");
  //   }
  // }, [isLoaded, isSignedIn, navigate]);

  const handleClicked = async (event: React.MouseEvent<HTMLAnchorElement>) => {
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

  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     navigate("/chat");
  //   }
  // }, [isLoaded, isSignedIn, navigate]);

  const handleClicked = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
