import { Link } from 'react-router-dom';

import IconButton from '../../components/IconButton';
import { ICONS } from '../../components/icons'; // import ICONS

export function JoinGroups() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-8 gap-8 mx-12 my-12">
          {ICONS.map((icon) => (
            <>
              <IconButton name={icon.name} icon={icon.icon} />
            </>
          ))}
        </div>
        <Link to="/2">Two</Link>
      </div>
    </>
  );
}

export function Two() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Two</h1>
        <Link to="/1">One</Link>
      </div>
    </>
  );
}
