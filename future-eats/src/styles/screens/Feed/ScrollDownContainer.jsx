import styled from 'styled-components';
import breakpoint, { device } from '../../../constants/breakpoints';

export const ScrollDownContainer = styled.main`
  overflow-y: scroll;
  height: ${(props) => (props.profileScreen ? '40vh' : '100vh')};
  z-index: -999;
  @media ${device.laptop}{
    height:55vh;
  }
  width:328px;
  margin:auto;
`;
