import React from 'react';
import kritique from "./components/chatRoom/kritique.js";
import featuredKritique from "./components/ChatRoom/FeaturedKritique.js";

function ChatRoom(props) {
    
    return (
        
      <div>
        <h1 id="tittle">Chat Room</h1>
         <Route exact path="/kritique" component={kritique} />
         <Route exact path="/featuredKritique" component={featuredKritique} />
      </div>

    );
}

export default ChatRoom;