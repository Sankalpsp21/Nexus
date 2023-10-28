import { Link } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

import { ICONS } from '../../components/icons'; // import ICONS

export function JoinGroups() {
  return (
    <>
      <ProgressBar completed={30} isLabelVisible={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Groups</h1>
        {ICONS.map((icon) => ( // use 'icon' instead of 'ICONS'
          <>
            <h2 className="text-2xl">{icon.name}</h2>
            <div className="flex flex-row items-center">
              {icon.icon}
            </div>
          </>
        ))}
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
