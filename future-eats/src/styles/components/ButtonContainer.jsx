import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: ${(props) => (props.logout ? "#e02020" : "#5cb646")};
    border:none;
    cursor: pointer;
    :focus {
    outline: none;
    }
    :hover{
        background-color:${(props) =>
          props.logout ? "rgba(224, 32, 33, 0.5)" : "rgba(92, 182, 70, 0.5)"} ;
    }
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    cursor:pointer;


}`;
