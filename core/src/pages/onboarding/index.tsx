import { useNavigate } from 'react-router-dom';

import { MdNavigateNext } from 'react-icons/md';
import IconButton from '../../components/IconButton';
import { ICONS } from '../../components/icons'; // import ICONS

export function JoinGroups() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-4xl mx-16 mt-4">Tell us what you're interests are</h1>
      <p className="text-xl mx-16 mt-4 italic font-light">This will help us match you with the right groups.</p>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-8 gap-8 mx-12 my-12">
          {ICONS.map((icon) => (
            <>
              <IconButton name={icon.name} icon={icon.icon} />
            </>
          ))}
        </div>
        <button className="btn bg-950 hover:bg-300 mb-4" onClick={() => navigate('/2')}>
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
      <div className="flex flex-col items-center justify-start space-y-4">
        <h1 className="text-4xl my-2">Let us learn a little bit more about you.</h1>
        <p className="text-xl italic font-light">Your response help us match you with the right groups.</p>
        <div className="flex flex-col items-center justify-center space-y-4 p-8">
          <textarea
            className="textarea textarea-bordered w-[150%] h-96 mb-4 bg-white opacity-75"
            placeholder="Who are you? What do you do for fun? Let's get to know each other..."
          ></textarea>
          <button className="btn bg-950 hover:bg-300" onClick={() => navigate('/1')}>
            <span className="text-50">Done</span>
            <MdNavigateNext className="text-white h-10 w-10" />
          </button>
        </div>
      </div>
    </>
  );
}
