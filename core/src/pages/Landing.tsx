import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
  } from "@clerk/clerk-react";
  import { useState } from "react";
  import { Navigate } from "react-router-dom";
  import NavBar from "../components/NavBar";
  import { InTextSignIn } from "../components/modals/SignIn";

  
  export default function Landing() {
  
  
    return (
        <>
        <NavBar />
        <ClerkLoaded>
            <SignedOut>
            <>
                You are signed out
            </>
            </SignedOut>
            <SignedIn>
            <>
                You are signed in
            </>
            </SignedIn>
        </ClerkLoaded>
        <ClerkLoading></ClerkLoading>
        </>
    );
  }