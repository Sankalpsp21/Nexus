import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Footer from './dashboard/Footer';
import Header from './dashboard/Header';
import Room from './dashboard/Room';

export default function RoomPage() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  const { roomCode } = useParams();
  const navigate = useNavigate();
  console.log(roomCode);
  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      } else {
        navigate(`/dashboard`);
      }
    };
  }, [hmsActions, isConnected, navigate]);

  return (
    <div className="relative flex flex-row">
      <SideBar />
      <>
        <Header />
        <Room />
        <Footer />
      </>
    </div>
  );
}
