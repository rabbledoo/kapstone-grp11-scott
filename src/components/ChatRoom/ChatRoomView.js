import React from 'react';
import message from "./components/chatRoom/message.js";
import featuredItem from "./components/ChatRoom/FeaturedItem.js";

function ChatRoom(props) {
    
    return (
        
      <div>
        <h1 id="tittle">Chat Room</h1>
         <Route exact path="/message" component={message} />
         <Route exact path="/featuredItem" component={featuredItem} />
      </div>

    );
}

export default ChatRoom;