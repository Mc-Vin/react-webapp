import styled from 'styled-components';

export const BottomBarWrapper=styled.div`
    position:fixed;
    display:flex;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    background-color:#f6f6f6;
    .btn-bar{
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        flex-direction:column;
        font-size:12px;
        flex:1;
        background-color: red;
        margin:0 5px;
        .bar-icon{
            margin-bottom:4px;
            width:25px;
            height:25px;
            background-color: blue;
        }
        .bar-key{
            width:25px;
            flex:1;
            display:flex;
            align-items:center;
            background-color: purple;
        }
    }
`;