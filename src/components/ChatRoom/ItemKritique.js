import React, { useEffect } from "react";
import { useStore } from "./";



function Kritique(props) {
  const dispatch = useStore((state) => state.dispatch);
  const components = useStore();

  useEffect(() => {
    kritique().then((kritiqueData) => {
      dispatch({ type: GET_KRITIQUE, payload: KritiqueData.kritique });
    });
  }, [dispatch, components.kritique]);

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
            {components.kritique &&
              components.kritique.map((props) => (
              <Kritique
                 userName={props.userName}
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
    
export default Kritique;
                 




        
                  

