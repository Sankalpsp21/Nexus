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
        className="min-w-min cursor-pointer border-2 border-200 px-5 py-2 rounded-md m-2 mr-8 text-lg text-300 font-bold transition ease-linear hover:bg-300 hover:text-white uppercase"
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
        className="btn btn-primary bg-200 min-w-min cursor-pointer text-white hover:bg-300 border-none text-base uppercase"
        onClick={(e) => handleClicked(e)}
      >
        Sign Up
      </button>
    </>
  );
}
