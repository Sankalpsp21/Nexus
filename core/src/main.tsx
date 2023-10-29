import { ConvexReactClient } from 'convex/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CustomBackground from './components/CustomBackground';
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import './index.css';

if (!import.meta.env.VITE_CONVEX_URL) {
  throw new Error('Missing Convex Account Key');
}

const convexClient = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
        <HMSRoomProvider>
          <BrowserRouter>
            <CustomBackground>
              <App />
            </CustomBackground>
          </BrowserRouter>
        </HMSRoomProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </React.StrictMode>
);
