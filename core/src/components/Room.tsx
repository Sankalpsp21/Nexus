import { selectPeers, useHMSStore } from '@100mslive/react-sdk';
import Peer from './Peer';
import { useUser } from '@clerk/clerk-react';
import rooms from '../data/rooms.json';

function Room({ roomCode }: any) {
  const peers = useHMSStore(selectPeers);
  const { user } = useUser();
  console.log(roomCode);

  return (
    <div className="conference-section mt-12">
      <h2>
        {rooms.map((room) => (
          <div>{room.roomCode === roomCode ? room.roomName : ''}</div>
        ))}
      </h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <>
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-offset-indigo-100 ring-offset-2 mt-4">
                <img src={user?.imageUrl}></img>
              </div>
            </div>
            <Peer key={peer.id} peer={peer} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Room;
