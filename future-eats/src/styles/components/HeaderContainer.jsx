import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100vw;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  img {
    width: 23px;
    height: 24px;
    margin: 10px 54px 10px 16px;
    justify-self: flex-start;
    align-self: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
  }
  h1 {
    align-self: center;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin: auto;
  }
`;
