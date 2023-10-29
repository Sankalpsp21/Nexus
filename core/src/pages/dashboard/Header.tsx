import { useHMSActions } from '@100mslive/react-sdk';
import { useNavigate } from 'react-router-dom';

function Header() {
  const hmsActions = useHMSActions();
  const navigate = useNavigate();

  const handleClick = () => {
    hmsActions.leave();
    navigate('/dashboard');
  };

  return (
    <header>
      <button id="leave-btn" className="btn btn-accent bg-stone-600 hover:bg-stone-400" onClick={() => handleClick()}>
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
