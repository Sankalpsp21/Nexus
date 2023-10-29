import { useHMSActions } from '@100mslive/react-sdk';

function Header() {
  const hmsActions = useHMSActions();

  return (
    <header>
      <button id="leave-btn" className="btn btn-accent bg-amber-200 hover:bg-amber-100" onClick={() => hmsActions.leave()}>
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M112 160l-64 64 64 64"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M64 224h294c58.76 0 106 49.33 106 108v20"
          />
        </svg>
        Leave Room
      </button>
    </header>
  );
}

export default Header;
