function Peer({ peer } : any) {
  return (
    <div className="peer-container mb-24">
      <div className="peer-name">
        {peer.name} {peer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
}

export default Peer;
