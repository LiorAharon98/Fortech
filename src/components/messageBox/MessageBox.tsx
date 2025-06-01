import React, { useState } from "react";
import { useSelector } from "react-redux";

const MessageBox = ({ socket }) => {
  const messages = useSelector((state) => state.messages);
  const [textMessage, setTextMessage] = useState("");

  const handleChange = (e) => {
    setTextMessage(e.target.value);
  };
  const handleClick = async () => {
    socket.emit("chat message received", { incomingMessage: false, message: textMessage });
    setTextMessage("");
  };
  return (
    <div
      style={{
        height: "85%",
        width: 400,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginTop: 2 }}>Hello user!</h3>
      <div style={{ width: "100%", height: 400, overflow: "scroll" }}>
        {messages?.messages?.map((message: { incomingMessage: boolean; message: string }, index: number) => {
          return (
            <p
              key={index}
              style={{
                backgroundColor: message.incomingMessage ? "rgb(2, 131, 243)" : "white",
                color: message.incomingMessage ? "white" : "rgb(2, 131, 243)",
                marginTop: 6,
                marginBottom: 3,
                paddingLeft: 10,
                height: 30,
                borderRadius: 8,
                width: "70%",
              }}
            >
              {message.message}
            </p>
          );
        })}
      </div>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <input
          onChange={handleChange}
          style={{
            border: "none",

            height: 30,
            width: "80%",
            outline: "none",
          }}
          type="text"
          placeholder="enter message"
        />
        <button
          style={{
            width: 90,
            marginTop: 10,
            border: "none",
            backgroundColor: "rgb(2, 131, 243)",
            color: "white",
            borderRadius: 10,
          }}
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
