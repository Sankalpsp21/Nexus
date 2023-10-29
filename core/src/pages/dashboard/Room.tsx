import { selectPeers, useHMSStore } from '@100mslive/react-sdk';
import Peer from './Peer';

function Room() {
  const peers = useHMSStore(selectPeers);

  return (
    <div className="conference-section mt-12">
      <h2>Conference</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <>
            <div className="rounded-md w-24 h-24 bg-purple-700"></div>
            <Peer key={peer.id} peer={peer} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Room;
