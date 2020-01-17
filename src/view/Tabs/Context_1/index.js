import React from 'react';

import { Page_1 } from './styled';
import Item from './Item';
import { products } from '../../../data';

const Context_1 = ( ) => {
  const test = products.map(el => 
    <Item 
      img={el.img} name={el.title} key={el.id} 
      placeholder={el.inp} value={el.sel}
      text={el.ti} arg={el.titl} id={el.id} completed={el.completed} />)

  return (
    <Page_1 >
      {test}
    </Page_1>
  )
}

export default Context_1;



