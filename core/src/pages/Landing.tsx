import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/clerk-react';
import HeaderText from '../components/HeaderText';

export default function Landing() {
  return (
    <>
      <ClerkLoaded>
        <SignedOut>
          <div className="flex flex-col items-center justify-center">
            <HeaderText />
            <button className="btn btn-wide bg-950 hover:bg-300 text-50 hover:text-950 outline outline-1 outline-300 hover:outline-950">
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
