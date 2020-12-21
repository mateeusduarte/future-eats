import styled from "styled-components";
import DropDown from "../../assets/dropdown.svg";
export const ChooseQuantityCardContainer = styled.div`
  width: 328px;
  height: 216px;
  margin: 27px 16px 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 16px;
    font-weight: normal;
    margin: auto;
    text-align: center;
  }

  select {
    -webkit-appearance: none;
    border: 1px solid black;
    width: 296px;
    height: 56px;
    padding-left: 10px;
    font-size: 16px;
    background-image: url(${DropDown});
    background-repeat: no-repeat;
    background-position: right;
    :focus {
      outline: none;
    }
    margin: auto;
  }
  p {
    color: #5cb646;
    font-size: 16px;
    align-self: flex-end;
    margin-right: 16px;
  }
`;
