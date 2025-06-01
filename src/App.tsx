import MessageBox from "./components/messageBox/MessageBox";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { messagesAction } from "./store";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const socket = io("http://localhost:3000");
  socket.on("connect", function () {
    dispatch(messagesAction.changeConnectionStatus(socket.connected));
  });
  socket.on("disconnect", function () {
    dispatch(messagesAction.changeConnectionStatus(socket.connected));
  });
  socket.on("send message to client", function (message: string) {
    dispatch(messagesAction.addMessages(message));
  });
  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit("chat message received", { incomingMessage: true, message: "chat message received" });
    }, 9000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 450 }}>
        <MessageBox socket={socket} />
      </div>
    </>
  );
}

export default App;
