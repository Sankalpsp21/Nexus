import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";

function Room() {
  const peers = useHMSStore(selectPeers);

  return (
    <div className="conference-section">
      <h2>Conference</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
        
        <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>

        <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>

      </div>
    </div>
  );
}

export default Room;




