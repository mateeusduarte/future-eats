import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 328px;
  margin: 8px auto;
  height: 42px;
  align-items: center;
 
  p {
    margin: 8px;
    cursor:pointer;
    :hover {
      color: #5cb646;
    }
  }
`;
