import React from "react";
import MessageList from "../components/Message/MessageList";
import "../bootstrap.css";

function ChatRoom() {
  return (
    <div>
      <h1>Current Kritiques:</h1>
      <MessageList />
    </div>
  );
}

export default ChatRoom;
