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
    const {
      userName = '',
      roomCode = '',
    } = inputValues
    // use room code to fetch auth token
    const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode })
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
    <div onClick={handleSubmit}>
      <h2>Join the {roomName} room!</h2>
    </div>
  );
};


export default RoomCard;



