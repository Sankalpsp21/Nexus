import { ClerkProvider } from '@clerk/clerk-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import { JoinGroups, Two } from './pages/onboarding/index.tsx';

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <NavBar />
        <Navigation />
      </ClerkProvider>
    </>
  );
}

function OnboardNavigation() {
  const location = useLocation();
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route
              path="/1"
              element={
                <>
                  <progress className="progress bg-200 h-3 mb-2 rounded-none" value={30} max={100} />
                  <JoinGroups />
                </>
              }
            />
            <Route
              path="/2"
              element={
                <>
                  <progress className="progress w-screen bg-200 h-3 mb-2 rounded-none" value={70} max={100} />
                  <Two />
                </>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

function Navigation() {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition classNames="fade" timeout={300}>
          <Routes>
            <Route path="/*" element={<OnboardNavigation />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
