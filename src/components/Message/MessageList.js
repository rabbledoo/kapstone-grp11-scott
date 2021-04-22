import React, { useEffect } from "react";
import MessageItem from "./MessageItem";
import { useStore } from "../../store/store";
import { GETMESSAGES } from "../../store/store";
import { ListGroup } from "react-bootstrap";

function MessageList() {
  const dispatch = useStore((state) => state.dispatch);

  return (
    <>
      <div>
        <section className="Messages">
          <ListGroup>
            {dispatch({ type: GETMESSAGES }).map((message) => (
              <MessageItem message={message} />
            ))}
          </ListGroup>
        </section>
      </div>
    </>
  );
}

export default MessageList;
