import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/IconButton';
import { ICONS } from '../../components/icons';

export function JoinGroups() {
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState(new Array(ICONS.length).fill(false));

  const handleButtonClick = (index: number) => {
    const updatedSelectedButtons = [...selectedButtons];
    updatedSelectedButtons[index] = !selectedButtons[index];
    setSelectedButtons(updatedSelectedButtons);
  };

  return (
    <>
      <h1 className="text-4xl mx-16 mt-4">Tell us what your interests are</h1>
      <p className="text-xl mx-16 mt-4 italic font-light">This will help us match you with the right groups.</p>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-8 gap-8 mx-12 my-12">
          {ICONS.map((icon, index) => (
            <>
              <IconButton
                key={index}
                name={icon.name}
                icon={icon.icon}
                onClick={() => handleButtonClick(index)}
                selected={selectedButtons[index]}
              />
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
  // TODO: If it's not their initial login, we'll need to navigate() to the lobby
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
          <button className="btn bg-950 hover:bg-300" onClick={() => navigate('/dashboard')}>
            <span className="text-50">Done</span>
            <MdNavigateNext className="text-white h-10 w-10" />
          </button>
        </div>
      </div>
    </>
  );
}

export function Lobby() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-1/2 w-full my-24">
      <h1 className="text-7xl font-semibold text-900 text-center">Finding you a match...</h1>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="scale-150 my-12"
        glassColor="#D2D2FE"
        color="#786CFD"
      />

      <div className="my-12 translate-y-3/4">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-950 hover:bg-300" onClick={() => navigate('/match/uid-silt-mus')}>
          <span className="text-50">Cancel</span>
        </button>
      </div>
    </div>
  );
}
