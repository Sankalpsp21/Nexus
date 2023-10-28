import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/clerk-react';
import NavBar from '../components/NavBar';

export default function Landing() {
  return (
    <>
      <NavBar />
      <ClerkLoaded>
        <SignedOut>
          <h1 className="text-3xl text-400">You are signed out.</h1>
        </SignedOut>
        <SignedIn>
          <>You are signed in</>
        </SignedIn>
      </ClerkLoaded>
      <ClerkLoading></ClerkLoading>
    </>
  );
}
