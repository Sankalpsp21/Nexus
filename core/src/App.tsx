import { ClerkProvider } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </ClerkProvider>
    </>
  );
}

export default App;
