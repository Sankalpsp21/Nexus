import { useHMSActions } from '@100mslive/react-sdk';
import React from 'react';

interface RoomCardProps {
  userName: string;
  roomName: string;
  roomCode: string;
  onClick: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ userName, roomName, roomCode, onClick }) => {
  const hmsActions = useHMSActions();
  // const [inputValues] = useState({
  //   //Name will be from clerk
  //   //Room token is in props
  //   userName: '',
  //   roomCode: '',
  // });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClick();
    const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });

    try {
      await hmsActions.join({ userName, authToken });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="card bg-white bg-opacity-60 border-violet-300 box h-fit flex flex-col justify-between border-2 p-2 hover:bg-100 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer rounded-xl hover:box">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-900 text-2xl">{roomName} Room</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary bg-200 min-w-min cursor-pointer text-white hover:bg-300 border-none text-base uppercase"
              onClick={handleSubmit}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
