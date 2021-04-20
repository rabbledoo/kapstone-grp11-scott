import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

//DeleteUser Component
const DeleteUser = (state, action) => {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
    switch(action.type) {
      case 'Delete_USER':
          return <div></div>;
    };

    //Event handler  
    const handleDeleteUser = (e) => {
      deleteUser(user.token, props.id);
    };
   //Fetch Request
    export const deleteUser = async (token, userId) => {
      const res = await fetch(baseURL + `user/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        Body: JSON.stringify({ userId }),
      });
      return await res.json();
    };
//return using a card from react-bootstrap
return 
<>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Delete User</Card.Title>
    <Card.Text>
    Caution! Clicking the Button Below will Permanently Delete User!
    </Card.Text>
    <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
  </Card.Body>
</Card>
</ >
};
//export DeleteUser component
export default DeleteUser;   
