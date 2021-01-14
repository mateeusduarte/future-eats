import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const OrderHistoryCardContainer = styled.div`
  width: 320px;
  height: 110px;
  margin: 5px ;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  @media ${device.laptop}{
    width:300px;
  }
  h3 {
    width: 100%;
    color: #5cb646;
    font-size: 16px;
    font-weight: normal;
    margin-left: 10px;
  }
  p:nth-child(2) {
    font-size: 12px;
    margin-left: 10px;
  }
  p:nth-child(3) {
    font-weight: bold;
    margin-left: 10px;
  }
`;
