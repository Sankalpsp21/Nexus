import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MatchRoom from '../../components/MatchRoom';

export default function MatchPage() {
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
    <div className="flex h-[100vh]">
      <div className="flex flex-row justify-evenly item-stretch space-x-96 float-right bg-slate-900 text-white w-full h-[100vh]">
        <Header />
        <MatchRoom roomCode={roomCode} />
        <Footer />
      </div>
    </div>
  );
}
