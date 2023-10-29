import SideBar from '../../components/SideBar';
import RoomCard from '../../components/RoomCard';
import rooms from '../../data/rooms.json';
import { useEffect } from "react";
import Room from "./Room";
import Footer from "./Footer";
import Header from "./Header";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";

export default function Dashboard() {

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="relative">
      <div className='flex flex-row flex-wrap'>
        <SideBar />

        {isConnected ? (
        <>
          <Header/>
          <Room />
          <Footer />
        </>
        ) : (
          <div className='grid grid-cols-5 gap-2 ml-96'>
            {rooms.map((room) => (
                <RoomCard key={room.roomCode} userName = "hello" roomName={room.roomName} roomCode={room.roomCode} />
            ))}
        </div>
        )}
      </div>
    </div>
  );
}
