import React, { useContext } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import { orange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Input from '../../../UI/Input/index';
import { ItemOne, Img, Text, Text2, Select, Option } from './styled';
import { Context } from '../../../../context';

const Item = ({ img, placeholder, value, name, text, arg, id }) => {
  
  const { dispatch } = useContext(Context)
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const GreenCheckbox = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  return (
    <ItemOne primary={checked}> 
      <GreenCheckbox
        color="orange"
        checked={checked}
        onChange={handleChange}
        value="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        onClick={() => dispatch({
          type: 'checked',
          payload: id,
          completed: checked
        })}
      />
      <Img src={img} />
      <Text>
        <div>
          {name}
        </div>
        <Text2>{text} {arg}</Text2>
      </Text>
      <Input placeholder={placeholder} />
      <Select> 
        <Option>{value}</Option>
        <Option>{value}</Option>
      </Select>
    </ItemOne> 
  )
}
  
export default Item;