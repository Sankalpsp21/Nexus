import { useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import IconButton from '../../components/IconButton';
import { ICONS } from '../../components/icons';
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAuth } from '@clerk/clerk-react';

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
            <IconButton
              key={index}
              name={icon.name}
              icon={icon.icon}
              onClick={() => handleButtonClick(index)}
              selected={selectedButtons[index]}
            />
          ))}
        </div>
        <button className="btn bg-950 hover-bg-300" onClick={() => {
          navigate('/2', { state: { selectedButtons: selectedButtons } }); // Ensure 'selectedButtons' is passed in the state
        }}>
          <MdNavigateNext className="text-white h-10 w-10" />
        </button>
      </div>
    </>
  );
}


export function Two() {
  const navigate = useNavigate();
  const addUser = useMutation(api.users.createUser);
  const user = useAuth();
  const { state } = useLocation();
  const selectedButtons = state && state.selectedButtons;
  const [textareaValue, setTextareaValue] = useState(""); // Add state for the textarea value



  // Function to concatenate selected preferences
  const getConcatenatedPreferences = () => {
    const selectedPreferences = ICONS
      .filter((_, index) => selectedButtons[index])
      .map((icon) => icon.name)
      .join(', '); // Concatenate with a separator, e.g., comma and space
    return `${selectedPreferences} ${textareaValue}`; // Add the textarea value
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start space-y-4">
        <h1 className="text-4xl my-2">Let us learn a little bit more about you.</h1>
        <p className="text-xl italic font-light">Your response help us match you with the right groups.</p>
        <div className="flex flex-col items-center justify-center space-y-4 p-8">

            <textarea
              className="textarea textarea-bordered w-[150%] h-96 mb-4 bg-white opacity-75"
              placeholder="Who are you? What do you do for fun? Let's get to know each other..."
              value={textareaValue} // Bind the value of the textarea to the state
              onChange={(e) => setTextareaValue(e.target.value)} // Update the state when the textarea changes
            ></textarea>

            <button className="btn bg-950 hover:bg-300" onClick={() => {
              // Create user with concatenated preferences
              const userPreferences = getConcatenatedPreferences();
              const clerkId = user.userId ? user.userId : ""; // Ensure clerkId is a string or an empty string if undefined
              addUser({ 
                clerkId,
                preferences: userPreferences,
                loginCount: 1
              });
              navigate('/dashboard');
            }}>
            <span className="text-50">Done</span>
            <MdNavigateNext className="text-white h-10 w-10" />
          </button>
        </div>
      </div>
    </>
  );
}
