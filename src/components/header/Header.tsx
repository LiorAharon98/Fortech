import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { connectionStatus } = useSelector((state) => state.messages);
  const { messages } = useSelector((state) => state.messages);

  return (
    <div>
      <p style={{ textAlign: "center" }}>Connection status : {connectionStatus ? "connected" : "disconnected"} !</p>
      <p style={{ textAlign: "center" }}>Total messages : {messages.length}</p>
    </div>
  );
};

export default Header;
