import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, useAuth, useClerk } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../../components/HeaderText';
import { ArrowIcon } from '../../components/icons';

export default function Landing() {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isSignedIn) {
      clerk.openSignUp();
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate('/1');
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <ClerkLoaded>
        <SignedOut>
          <div className="flex flex-col items-center justify-center">
            <HeaderText />
            <ArrowIcon />
            <button
              className="btn btn-wide bg-950 hover:bg-300 text-50 hover:text-950 outline outline-1 outline-300 hover:outline-950 scale-125"
              onClick={handleClick}
            >
              <span className="text-50 text-xl whitespace-nowrap">Join Nexus Today</span>
            </button>
          </div>
        </SignedOut>
        <SignedIn>
          <></>
        </SignedIn>
      </ClerkLoaded>
      <ClerkLoading></ClerkLoading>
    </>
  );
}
