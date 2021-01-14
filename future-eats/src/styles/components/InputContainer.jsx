import styled from "styled-components";

export const InputContainer = styled.div`
  border: ${(props) =>
    props.isConfirmed ? "1px solid #e02020" : "1px solid #b8b8b8"};
  width: 328px;
  height: 56px;
  border-radius: 2px;
  margin-bottom: 10px;
  input {
    position: relative;
    top: -10px;
    height: 40px;
    border: none;
    width: 305px;
    padding-left: 16px;
    ::placeholder {
      color: #d0d0d0;
      font-size: 16px;
      letter-spacing: -0.39px;
    }
    :focus {
      outline: none;
    }
  }
  label {
    position: relative;
    top: -10px;
    left: 16px;
    color: ${(props) => (props.isConfirmed ? "#e02020" : "#b8b8b8")};
    background-color: white;
    padding: 0 2px;
    font-size: 12px;
    letter-spacing: -0.29px;
  }
  img {
    position: relative;
    top: -45px;
    left: 290px;
    cursor: pointer;
  }
`;
