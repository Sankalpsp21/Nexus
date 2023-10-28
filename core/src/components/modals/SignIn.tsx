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
        className="min-w-min cursor-pointer border-2 border-slate-600 px-5 py-2 rounded-md m-2 mr-8 text-lg font-bold transition ease-linear hover:bg-300"
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
        className="btn btn-primary bg-400 min-w-min cursor-pointer text-white hover:bg-600 border-none text-base normal-case"
        onClick={(e) => handleClicked(e)}
      >
        Sign Up
      </button>
    </>
  );
}
