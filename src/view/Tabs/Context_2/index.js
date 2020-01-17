import React from 'react';

import Box from '@material-ui/core/Box';
import { Test, TestHeader, TestBody, TestBodyOne, TestBodyTwo, 
        TestBodyThree, TestBodyFour, TestBodyFive, Img, H1, P, 
        H2, PStyle, Img_1, Img_2, Img_3 } from './styled';
import five from '../../../assets/images/5.png';
import six from '../../../assets/images/6.png';

const Context_2 = () => {
  return (
    <Test>
      <TestHeader>
        <Box>
          <Img src={five} />
          <H1>Drop CSV file</H1>
          <P>Or select file from your computr</P>
        </Box>
      </TestHeader>
      <TestBody>
          <H2>CSV format</H2>
          <TestBodyOne>
            <PStyle>
              The file must be a CSV file with the and shoulde
              the next filds as the names of the columns:
            </PStyle> 
          </TestBodyOne>
          <Img_1 src={six} />
          <TestBodyTwo>
            ProductID
          </TestBodyTwo> 
            <Img_2 src={six} />
          <TestBodyThree>
            title
          </TestBodyThree>
            <Img_3 src={six} />
          <TestBodyFour>
            price
          </TestBodyFour>
          <TestBodyFive>
            Vizit help section
          </TestBodyFive>
      </TestBody>
    </Test>
  )
}

export default Context_2;