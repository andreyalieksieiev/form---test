import React from 'react';

import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '../Modal';
import { Button_Box } from './styled';

const Wrapper = () => {
  const [ showForm, setShowForm ] = useState(false);

  let openForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <Button_Box>
        <Button variant="contained" color="secondary" onClick={openForm}>
          Open Window
        </Button>
      </Button_Box>
      {showForm ? <Modal setShowForm={setShowForm} /> : null}
    </div>
  )
} 

export default Wrapper;