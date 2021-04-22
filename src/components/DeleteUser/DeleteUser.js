import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useStore } from "../../store/store";

function DeleteUser(props) {
  const deleteUser = useStore((state) => state.user);

  const deletingUser = useState({
    userName: "",
    password: "",
  });
    
  
  function handleDeleteUser(e) {
    e.preventDefault();
    // deleteUser("http://localhost:4000/users");
  };
  
return
  <div>
<Button variant='danger'
    type="delete"
    id="DeleteUser"
    onClick={ handleDeleteUser }>
Delete
</Button>
  </div>
    
}
export default DeleteUser;  