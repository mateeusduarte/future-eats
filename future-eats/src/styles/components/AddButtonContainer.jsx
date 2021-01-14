import styled from 'styled-components';

export const AddButtonContainer = styled.button`
  position: relative;
  bottom: 0px;
  top: 89px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #5cb646;
  width: 90px;
  height: 31px;
  background-color: white;
  color: #5cb646;
  cursor:pointer;
  :focus {
    outline: none;
  }
  :hover {
    color: white;
    background-color: #5cb646;
  }
`;
