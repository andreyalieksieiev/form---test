import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Context_1 from './Context_1';
import Context_2 from './Context_2';

const Tabbs = () => {

  return (
      <Tabs>
        <TabList>
          <Tab>Manual Add</Tab>
          <Tab>Add from CSV</Tab>
        </TabList>
        <TabPanel>
          <div><Context_1 /></div>
        </TabPanel>
        <TabPanel>
          <div><Context_2 /></div>
        </TabPanel>
    </Tabs>    
  )
}

export default Tabbs;



