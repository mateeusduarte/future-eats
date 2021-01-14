import styled from 'styled-components';

export const RestaurantDetailCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 328px;
  margin: auto;
  margin-top: 17px;
  img {
    width: 328px;
    height: 120px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  h1 {
    font-size: 16px;
    color: #5cb646;
    font-weight: normal;
  }
  p {
    margin-top: 0;
    color: #b8b8b8;
  }
  div {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
`;
