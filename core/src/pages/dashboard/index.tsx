import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import RoomCard from '../../components/RoomCard';
import SideBar from '../../components/SideBar';
import rooms from '../../data/rooms.json';

export default function Dashboard() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  const [isLoading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleRoomCardClick = (roomCode: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/room/${roomCode}`);
    }, 3000);
  };

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-1/2 w-screen">
        <h1 className="text-7xl font-semibold text-gray-900">Joining room...</h1>
        <>
          <Vortex
            visible={true}
            height="100"
            width="100"
            ariaLabel="vortex-loading"
            wrapperClass="vortex-wrapper scale-150 my-12"
            colors={['#7E7CFD', '#D2D2FE', '#524FFD', '', '#A6A4FE', '#2522FC']}
          />
        </>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex flex-row">
        <SideBar />
        <div className="grid grid-cols-3 gap-4 p-8 h-full w-full">
          {rooms.map((room) => (
            <RoomCard
              key={room.roomCode}
              userName="hello"
              roomName={room.roomName}
              roomCode={room.roomCode}
              onClick={() => handleRoomCardClick(room.roomCode)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
