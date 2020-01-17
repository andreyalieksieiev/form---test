import styled from 'styled-components';

export const ItemOne = styled.div`
  width: 849px;
  height: 88px;
  border-bottom: 1px solid #E5E5E5 ;
  display: flex;
  align-items: center;
  background: ${props => props.primary ? "#F2F2F2" : "white"}; 
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 16px;
  margin-right: 16px ;
`;

export const Text = styled.div`
  width: 280px;
  height: 40px;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
  color: #727272;
  margin-left: 10px;
`;

export const Text2 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B7B7B7;
`;

export const Select = styled.select`
  width: 159px;
  height: 36px;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 2px; 
  margin-left: 16px;
  color: #727272;
`;

export const Option = styled.option`
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 2px;
`;