import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  margin: auto;
  width: 328px;
  height: 56px;
  display: flex;
  border-radius: 2px;
  border: 1px solid #b8b8b8;
  margin-top: 10px;
  input {
    border: none;
    height: 45px;
    align-self: center;
    width: 270px;
    margin-left: 10px;
    ::placeholder {
      color: #d0d0d0;
      font-size: 16px;
    }
    :focus {
      outline: none;
    }
  }
  img {
    margin-left: 10px;
  }
`;
