import React, { useEffect } from 'react';
import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";


interface RoomCardProps {
userName: string;
roomName: string;
roomCode: string;
}


const RoomCard: React.FC<RoomCardProps> = ({ userName, roomName, roomCode }) => {
  const hmsActions = useHMSActions();
  const [inputValues] = useState({
    //Name will be from clerk
    //Room token is in props
    userName: "",
    roomCode: ""
  });


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const authToken = await hmsActions.getAuthTokenByRoomCode({roomCode})

    try {
      await hmsActions.join({ userName, authToken });
    } catch (e) {
      console.error(e)
    }
  };

  // Handle leaving room
  useEffect(() => {
      window.onunload = () => {
        hmsActions.leave();
      };
    }, [hmsActions]);

  return (
    <div onClick={handleSubmit} className="w-64 p-4 mx-auto bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800">{`Join the ${roomName} room!`}</h2>
    </div>
  );
};


export default RoomCard;



