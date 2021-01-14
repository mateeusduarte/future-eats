import styled from 'styled-components';

export const ProfileInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  
  margin:auto;
  width:328px;

  :hover {
    background-color: #eeeeee;
  }
  h2 {
    color: #b8b8b8;
    font-size: 16px;
    font-weight: normal;
    margin: 5px;
    margin-left: 20px;
  }
  p {
    margin: 5px;
    margin-left: 20px;
  }
  img {
    position: relative;
    top: 25px;
    left: 300px;
    margin: 0;
    width: 24px;
    height: 24px;
  }
`;
