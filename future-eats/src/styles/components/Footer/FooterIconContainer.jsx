import styled from "styled-components";

export const FooterIconContainer = styled.div`
  img:nth-child(1) {
    position: absolute;
    opacity: ${(props: active) => (props.active ? "0" : "1")};
    :hover {
      opacity: 0;
    }
  }
  img:nth-child(2) {
    position: absolute;
    margin: 0;
    opacity: 1;
    z-index: -1;
  }
`;
