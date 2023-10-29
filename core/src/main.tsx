import { ConvexProvider, ConvexReactClient } from 'convex/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CustomBackground from './components/CustomBackground';
import { HMSRoomProvider } from '@100mslive/react-sdk';

import './index.css';

if (!import.meta.env.VITE_CONVEX_URL) {
  throw new Error('Missing Convex Account Key');
}

const convexClient = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convexClient}>
      <HMSRoomProvider>
        <BrowserRouter>
          <CustomBackground>
            <App />
          </CustomBackground>
        </BrowserRouter>
      </HMSRoomProvider>
    </ConvexProvider>
  </React.StrictMode>
);
