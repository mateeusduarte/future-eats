import styled from 'styled-components';

export const ItemCardContainer = styled.div`
    width: 328px;
    height: 120px;
    border-radius: 8px;
    border:1px solid #b8b8b8;
    display:flex;
    margin:auto;
    margin-bottom:8px;
    h2{
        color:#5cb646;
        font-size:16px;
        font-weight: normal;
        margin-bottom:0;
        margin-top:3px;
    }
    img{
        width: 96px;
        height: 120px;
        z-index:-1;
    }
    div:nth-child(2){
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        padding-left:16px;
        width:232px;
        height: 120px;
    }
    div:nth-child(3){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:90px;
        height: 120px;
        p:nth-child(2){
            margin:0;
            font-size: 12px;
            color: #5cb646;
            font-size: 16px;
        }
    }
    p:nth-child(2){
        margin:0;
        font-size: 12px;
        color:#b8b8b8
    }
   
    }`;
