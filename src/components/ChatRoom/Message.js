import React, { useEffect } from "react";
import { useStore } from "./";



function Message(props) {
  const dispatch = useStore((state) => state.dispatch);
  const components = useStore();

  useEffect(() => {
    message().then((messageData) => {
      dispatch({ type: GET_MESSAGE, payload: messageData.message });
    });
  }, [dispatch, components.message]);

  useEffect(() => {
    console.log(window.localStorage);
    if (!window.localStorage.user) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <div>
        <section className="ChatRoom">
          <ul className="ChatRoom">
            {components.message &&
              components.message.map((props) => (
              <Message
                 displayName={props.displayName}
                 text={props.text}
                 createdAt={props.createdAt}
            />
       ))}
               </ul>
             </section>
           </div>
         </>
       );
     }
    
export default Message;
                 




        
                  

