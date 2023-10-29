import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { useEffect, useState } from 'react';
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
        <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 border-gray-900 my-12"></div>
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
