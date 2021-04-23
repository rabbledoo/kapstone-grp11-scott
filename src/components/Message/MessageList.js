import React, { useState } from "react";
import MessageItem from "./MessageItem";
import { store } from "../../store/store";
// import { GETMESSAGES } from "../../store/store";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  setMessages(store.messages);
  return (
    <>
      <div>
        <section className="Messages">
          {messages.map((message) => (
            <MessageItem message={message} />
          ))}
        </section>
      </div>
    </>
  );
};

export default MessageList;
