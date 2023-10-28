import { Link } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

export function One() {
  return (
    <>
      <ProgressBar completed={30} isLabelVisible={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">One</h1>
        <Link to="/2">Two</Link>
      </div>
    </>
  );
}

export function Two() {
  return (
    <>
      <ProgressBar completed={60} isLabelVisible={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Two</h1>
        <Link to="/1">One</Link>
      </div>
    </>
  );
}
