import { useState, useEffect } from "react";
import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5001");
function App() {
  const [message, setMessage] = useState<string>("");
  const [messageReceived, setMessageReceived] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div>
      <input
        placeholder="Join room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      ></input>
      <button onClick={joinRoom}>Join room</button>
      <input
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
