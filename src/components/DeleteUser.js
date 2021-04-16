import React, { useState } from 'react';
import { DeleteUser} from './';
import { Form, Button } from 'react-bootstrap/Button';

const DeleteUser = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return state.filter(


      )
  }
    return 
     <div>
      <Button variant="info">Delete</Button>{' '}
      
     </div>;
  };
  
  export default DeleteUser;
  