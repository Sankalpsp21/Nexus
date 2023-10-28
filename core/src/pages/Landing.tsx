import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/clerk-react';

export default function Landing() {
  return (
    <>
      <ClerkLoaded>
        <SignedOut>
          <>You are signed out</>
        </SignedOut>
        <SignedIn>
          <></>
        </SignedIn>
      </ClerkLoaded>
      <ClerkLoading></ClerkLoading>
    </>
  );
}
