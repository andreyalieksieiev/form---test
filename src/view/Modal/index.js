import React from 'react';

import Form from '../Form';
import { Mod } from './styled';

const Modal = ( { setShowForm }) => {
  return (
    <Mod>
      <Form setShowForm={setShowForm} onClick={() => setShowForm()} />
    </Mod>
  )
} 

export default Modal;