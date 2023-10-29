import SideBar from '../../components/SideBar';
import RoomCard from '../../components/RoomCard';
import rooms from '../../data/rooms.json';

export default function Dashboard() {
  return (
    <div className="relative">
      <div className='grid grid-cols-2'>
        <SideBar />
        <div>
          {rooms.map((room) => (
              <RoomCard key={room.roomCode} userName = "hello" roomName={room.roomName} roomCode={room.roomCode} />
          ))}
        </div>
      </div>
    </div>
  );
}
