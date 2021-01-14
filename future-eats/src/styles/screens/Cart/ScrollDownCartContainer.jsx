import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';


export const ScrollDownCartContainer = styled.div`
  overflow-y: scroll;
  height: 45vh;
  padding:0;
  margin-top:5vh;
  @media ${device.laptop}{
    height:55vh;
  }
`;
