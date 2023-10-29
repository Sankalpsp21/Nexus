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
      <button id="leave-btn" className="btn-danger" onClick={handleClick}>
        Leave Room
      </button>
    </header>
  );
}

export default Header;
