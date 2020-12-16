import styled from "styled-components";

export const FooterContainer = styled.footer`
    border-top:1px solid rgba(0, 0, 0, 0.25);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    padding: 10px 0px 9px 0px;
    display:flex;
    justify-content:space-around;
    img:nth-child(1){
        position:absolute;
        opacity:1;
        :hover{
            opacity:0;
        }
        
    }
    img:nth-child(2){
        position:absolute;
        margin:0;
        opacity:1;
        z-index:-1;
    }
   `