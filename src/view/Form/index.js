import React, { useReducer } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import one from '../../assets/images/1.png';
import Tabbs from '../Tabs';
import reducer from '../../store/reducer';
import { Context } from '../../context';
import { FormBox, FormBoxHead, FormBoxHeadTwo, FormBoxFooter, FormBoxFooterTwo, Img, H1, P } from './styled';

const Form = ({ setShowForm }) => {

  const [state, dispatch] = useReducer(reducer, [])

  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);

  return (
    <Context.Provider value={{ dispatch }}>
    <FormBox>
      <Box>
        <Img src={one} onClick={() => {setShowForm()}} />
      </Box>
      <Box>
        <H1>23 Untracked products in my store</H1>
      </Box>
      <FormBoxHead>
        <FormBoxHeadTwo>
          <P>How do i get source products ID</P>
        </FormBoxHeadTwo> 
        <Tabbs />
      </FormBoxHead>
      <FormBoxFooter>
        <FormBoxFooterTwo>
          <ColorButton variant="contained" >
            Add  ( {state.length} )
        </ColorButton>
        </FormBoxFooterTwo>
      </FormBoxFooter>
    </FormBox>
    </Context.Provider>
  )
} 

export default Form;