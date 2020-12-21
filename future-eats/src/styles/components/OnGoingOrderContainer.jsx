import styled from "styled-components";

export const OnGoingOrderContainer = styled.div`
  width: 100vw;
  height: 118px;
  background-color: #5cb646;
  position: fixed;
  bottom: 69px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin: 2px 24px 0 24px;
  }
  div {
    margin-left: 24px;
  }
  p {
    font-size: 16px;
    letter-spacing: -0.39px;
  }
  p:nth-child(1) {
    color: white;
    margin-bottom: -5px;
  }
  p:nth-child(3) {
    font-weight: bold;
    margin-top: -5px;
  }
`;
