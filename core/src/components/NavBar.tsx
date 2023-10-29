import React from 'react';
import { SignIn, SignUp } from '../components/modals/SignIn';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const NavBar: React.FC = () => {
  return (
    <nav className="nav p-4 max-h-15 bg-slate-200">
      <ul className="flex flex-row justify-between">
        <li className="mr-4">
          <a href="/dashboard">
            <figure className="w-36">
              <img src="/nexus-logo.svg" alt="Nexus logo" className="rounded-xl scale-150 -translate-y-7" />
            </figure>
          </a>
        </li>
        <SignedIn>
          <div className="flex flex-col justify-center">
            <UserButton afterSignOutUrl={'/'} />
          </div>
        </SignedIn>
        <SignedOut>
          <li>
            <SignIn />
            <SignUp />
          </li>
        </SignedOut>
      </ul>
    </nav>
  );
};

export default NavBar;
