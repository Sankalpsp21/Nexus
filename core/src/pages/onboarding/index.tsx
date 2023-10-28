import { useNavigate } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';
import { MdNavigateNext } from 'react-icons/md';

export function One() {
  const navigate = useNavigate();
  return (
    <>
      <ProgressBar completed={30} isLabelVisible={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">One</h1>
        <button className="btn bg-950 hover:bg-300" onClick={() => navigate('/2')}>
          <span className="text-50 text-xl whitespace-nowrap">
            <MdNavigateNext />
          </span>
        </button>
      </div>
    </>
  );
}

export function Two() {
  const navigate = useNavigate();
  return (
    <>
      <ProgressBar completed={60} isLabelVisible={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Two</h1>
        <button className="btn bg-950 hover:bg-300" onClick={() => navigate('/1')}>
          <span className="text-50 text-xl whitespace-nowrap">
            <MdNavigateNext />
          </span>
        </button>
      </div>
    </>
  );
}
