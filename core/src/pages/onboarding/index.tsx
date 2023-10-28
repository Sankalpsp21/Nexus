import { useNavigate, Link } from 'react-router-dom';

import IconButton from '../../components/IconButton';
import { ICONS } from '../../components/icons'; // import ICONS
import { MdNavigateNext } from 'react-icons/md';

export function JoinGroups() {
  const navigate = useNavigate();
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
        <button className="btn bg-950 hover:bg-300" onClick={() => navigate('/2')}>
          <MdNavigateNext className="text-white h-10 w-10" />
        </button>
      </div>
    </>
  );
}

export function Two() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Two</h1>
        <textarea
          className="textarea textarea-bordered w-11/12 h-96 mb-4"
          placeholder="Tell us about your interests"
        ></textarea>
        <button className="btn bg-950 hover:bg-300" onClick={() => navigate('/1')}>
          <MdNavigateNext className="text-white h-10 w-10" />
        </button>
      </div>
    </>
  );
}
