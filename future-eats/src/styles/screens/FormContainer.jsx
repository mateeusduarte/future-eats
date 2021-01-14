import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img:nth-child(1) {
    width: 104px;
    height: 58px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 60px;
  }
  p {
    font-size: 16px;
  }
  strong {
    :hover {
      color: #5cb646;
      cursor: pointer;
    }
    :active {
      color: #5cb646;
      cursor: pointer;
    }
  }
`;
